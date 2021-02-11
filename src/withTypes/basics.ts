import { createStore } from "redux"
import { ActionType, createAction, getType, Reducer } from "typesafe-actions"

// Initial state
const initialState: MyState = { astronauts: ["Paca"] }
type MyState = {
  readonly astronauts: string[]
}

// Action
const myAction = createAction("ADD_ASTRONAUT")<string>()
type MyActions = ActionType<typeof myAction>

// Reducer
const reducer: Reducer<any, MyActions> = (currentState = initialState, action) => {
  if (action.type === getType(myAction)) {
    const payload = action.payload
    return { astronauts: [...currentState.astronauts, payload] }
  }
}

// Store
const store = createStore(reducer)
console.log("1: ", store.getState())

// Subscription
store.subscribe(() => {
  console.log("Hey, the state has changed", store.getState())
})

// Dispatch
store.dispatch(myAction("Ana"))
store.dispatch(myAction("Julia"))
store.dispatch(myAction("Candela"))

console.log("2: ", store.getState())
