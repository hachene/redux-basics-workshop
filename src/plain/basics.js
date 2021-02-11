const redux = require('redux')

// Initial state
const initialState = { astronauts: ['Paca'] }

// Action
const myAction = { type: 'ADD_ASTRONAUT' }

// Reducer
const reducer = (currentState = initialState, action) => {
  if (action.type === 'ADD_ASTRONAUT') {
    return { astronauts: [...currentState.astronauts, 'Juan'] }
  }
}

// Store
const store = redux.createStore(reducer)
console.log('1: ', store.getState())


// Subscription
store.subscribe(() => { 
  console.log("Hey, the state has changed", store.getState())
})

// Dispatch 
store.dispatch(myAction)
store.dispatch(myAction)
store.dispatch(myAction)

console.log('2: ', store.getState())

