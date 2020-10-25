
 import {createStore,combineReducers} from 'redux';
 import {reducer} from './reducer';
export let store=createStore(reducer);



// function saveToLocalStorage(state)
// {
// 	try{
// 		const serializedState=JSON.stringify(state);
// 		window.localStorage.setItem('state',serializedState);

// 	}
// 	catch(e)
// 	{
// 		console.log(e);
// 	}
// }
// function loadFromLocalStorage()
// {
// 	try{
// 		const serializedState=localStorage.getItem('state',serializedState);
// 		if(serializedState===null)
// 			return undefined
// 		return JSON.parse(serializedState);

// 	}
// 	catch(e)
// 	{
// 		console.log(e);
// 		return undefined
// 	}

// }


// const rootReducer=combineReducers(
// {
// 	list:reducer,
// })
// const persistedState=loadFromLocalStorage()


// store.subscribe(()=>saveToLocalStorage(store.getState()))

//  const store=createStore(rootReducer,
// 	persistedState,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
//  