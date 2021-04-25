import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// eslint-disable-next-line no-shadow
export const toggle = createAction(TOGGLE, (id) => id);
// eslint-disable-next-line no-shadow
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '죽고싶다',
      done: false,
    },
    {
      id: 2,
      text: '퐁당앱깔기 ',
      done: true,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    // eslint-disable-next-line no-shadow
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    // eslint-disable-next-line no-shadow
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default todos;
