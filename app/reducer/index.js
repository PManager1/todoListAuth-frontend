import uuid from 'uuid';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

var defaultState = {};

module.exports = combineReducers({
  form: formReducer
});


//
// module.exports = (state, action) => {
//   switch (action.type) {
//     // case 'ADD_TODO':
//     // //  ...state.todos =  this array will contain all the old todos, plus the new ones.
//     //   var newTodos = [
//     //     ...state.todos,
//     //     {
//     //       text: action.text,
//     //       id: uuid.v4()
//     //     }
//     //   ]
//     //   return {   // returnign an object with todos: set to the newTodos variable.
//     //       todos: newTodos
//     //   };
//
//     default:
//       return state;
//   }
// }
