// define action
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// action creator
export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    checked: false,
    text,
  },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

// init
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      checked: true,
      text: "리덕스 기초 배우기",
    },
    {
      id: 2,
      checked: false,
      text: "리액트와 리덕스 사용하기",
    },
  ],
};

// reducer
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => (action.id === todo.id ? !todo.checked : todo)),
      };
    case REMOVE:
      return {};
    default:
      return state;
  }
}

export default todos;
