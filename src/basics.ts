const redux = require("redux");

const initialState = { myProperty: 1 };

// Reducer

const rootReducer = (currentState = initialState, action) => {
  if (action.type === "MY_AWESOME_ACTION")
    return { ...currentState, myProperty: currentState.myProperty + 1 };
};

// Store

const store = redux.createStore(rootReducer);
console.log("🚀 ~ file: basics.js ~ line 10 ~ store", store.getState());

// Subscription

store.subscribe(() => {
  console.log("🚀 ~ file: basics.js ~ line 15 ~ store", store.getState());
});

// Action

const myAction = { type: "MY_AWESOME_ACTION" };

// Dispatch

store.dispatch(myAction);
console.log("🚀 ~ file: basics.js ~ line 30 ~ store", store.getState());
