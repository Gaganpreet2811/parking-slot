import React,{Component} from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/TodoInput';
import Navbar from './components/Navbar';
import TenTodos from './components/TenTodos';
import {BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
  
  <BrowserRouter>
  <div className="App">
  	<Navbar/>
    <TenTodos/>
  	<Route  exact path='/'  component={TodoList} />
  	<Route path='/add' component={TodoInput} />
  	<Route path='/list' component={TodoList} />
  	</div>
  	</BrowserRouter>
  	
  	
  );
}

export default App;
