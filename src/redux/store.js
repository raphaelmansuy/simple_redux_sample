
import { createStore } from "redux";
import counterReducer from './reducer'
import {loadState,peristState} from '../localstorage'


const loadedState = loadState()

console.log(loadedState)

const store = createStore(counterReducer,loadedState)

store.subscribe(() => {
   try {  
    peristState(store.getState()) 
  } catch(error) {
    console.log('Localstorage not supported')
  }
})

export { store }