import React,{useState,useEffect} from 'react';
import {addTodo} from '../reducers/actions';
import {useDispatch} from 'react-redux';
import './TodoInput.css';
function TodoInput()
{
	let dispatch=useDispatch();
	let [id,setId]=useState();
	let [name,setName]=useState();
	let [phone,setPhone]=useState();
	
	// 
	return(
	
		<div className="col m-2 hero-image   text-center font-weight-bold text-white" >
		<br/>
		
			<h1 className="text-center"> Add Your Details</h1>
		<br/>
			<div className="size text-center">
			<label>Enter parking slot</label>
				<input 
				type="number" 
				value={id}
				onChange={(e)=>setId(e.target.value)}
				className="col form-control"/>
				<label>Enter Your name</label>
				<input 
				type="text" 
				value={name}
				onChange={(e)=>setName(e.target.value)}
				className="col form-control" />
				{name?null:<div className="text-danger">Name is required</div>}
				<label>Enter phone number</label>
				<input
				 type="number"  
				 value={phone}
				 onChange={(e)=>setPhone(e.target.value)}
				className="col form-control"/>
				<br/>
				<div className="text-center">
				<button 
					onClick={()=>
					{
					
						
						dispatch(addTodo(
						{
							id:id,
							name:name,
							phone:phone
						}));
						setPhone('');
						setName('');
						setId('');
					}}
				className="btn btn-primary  mx-2"><strong>Add</strong></button>
				</div>
			</div>
		</div>
		)
	
}
export default TodoInput;