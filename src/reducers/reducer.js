import {ADD_TODO,DELETE_TODO,EXTEND_TODO} from './actions';
import {todos} from './states';
export let reducer=(state=todos,action)=>
{
	let newTodos=[...state];
	switch (action.type)
	{
		case ADD_TODO:
		
		newTodos=[...state];
		let index=-1;
		for(let i=0;i<newTodos.length;i++)
		{
			if(action.payload.id<=50)
			{
				index++;
			if(newTodos[i].id==action.payload.id && newTodos[i].name==null)
				break;
			}
			if(action.payload.id==null)
			{index++;
				if(newTodos[i].name==null )
					break;
			}
			
		}
		if(index!=-1)
		{

			newTodos[index]=action.payload;
			newTodos[index].id=index+1;
			return newTodos;
		}

			break;
		case	DELETE_TODO:
		newTodos=[...state];
		let index1=-1;
		for(let i=0;i<newTodos.length;i++)
		{
			index1++;
			if(newTodos[i].id==action.payload.id)
				break;
		}
		if(index1!=-1)
		{
			newTodos[index1]=action.payload;
			return newTodos;
		}
		 
		break;
		case EXTEND_TODO:
		newTodos=[...state];
		for(let i=1;i<=10;i++)
		{
			let act={
			id:newTodos.length+1,
			name:null,
				phone: null,
				}
			newTodos.push(act);
		}
		return newTodos;

			default :
			break;
	}
	return state;
}