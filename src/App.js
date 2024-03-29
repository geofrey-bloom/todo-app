import React, {useEffect, useState} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

//when the app loads, we need  to listen to the database and fetch new todos  as they get added/removed

useEffect (() =>{
  //this code here...fires when the app.js loads
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
    //console.log((snapshot.docs.map(doc =>doc.data().todo)));
    setTodos(snapshot.docs.map(doc =>doc.data().todo))
  })
}, []);
  const addTodo =(event) => {
    //this will fire off when we click the button
    event.preventDefault(); // will stop the refreshing
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput(''); // clears up the form after submitting
  }

  return (
    <div className ="App">
      <h1>Geofrey githiga</h1>
      <form>
      <FormControl>
      <InputLabel>Write a todo</InputLabel>
      <Input value= {input} onChange ={event => setInput(event.target.value)}/>
      </FormControl>
      
      <Button disabled={!input} type="submit"onClick={addTodo} variant ="contained" color="primary">
        Add todo
      </Button>
     {/*<button type ="submit"onClick={addTodo}>Add todo</button>*/}
      </form>
      
      <ul>
        {todos.map(todo =>(
          <Todo text ={todo}/>
         // <li>{todo}</li>

        ))}
      </ul>

    </div>
  );
}

export default App;
