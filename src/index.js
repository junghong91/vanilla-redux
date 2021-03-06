// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
// };

// countStore.subscribe(onChange);

// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// };

// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

//-------------------------- For the ToDo List App --------------------------//

// import { createStore } from "redux";

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const addToDo = (text) => {
//   return { type: ADD_TODO, text };
// };

// const deleteToDo = (id) => {
//   return { type: DELETE_TODO, id };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // Must NOT using Mutation, new array should be returned
//     case ADD_TODO:
//       const newToDoObj = { text: action.text, id: Date.now() };
//       return [newToDoObj, ...state];
//     case DELETE_TODO:
//       const cleaned = state.filter((todo) => todo.id !== action.id);
//       return cleaned;
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// const dispatchAddToDo = (text) => {
//   store.dispatch(addToDo(text));
// };

// const dispatchDeleteToDo = (event) => {
//   const id = parseInt(event.target.parentNode.id); // id coming from html is string type
//   store.dispatch(deleteToDo(id));
// };

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach((toDo) => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DELETE";
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// };

// store.subscribe(paintToDos); // Painting the list for every changes

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);

//-------------------------- React Redux ------------------------------- //
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
