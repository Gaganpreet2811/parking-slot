export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELETE_TODO";
export const EXTEND_TODO="EXTEND_TODO";
export function addTodo(todo)
{
	return{
		type:'ADD_TODO',
		payload: todo
	}
}

export function deleteTodo(todoId)
{
	return{
		type:'DELETE_TODO',
		payload: todoId
	}
}
export function extendTodo()
{
	return{
		type:'EXTEND_TODO',
		
	}
}