import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'adminQna/CHANGE_INPUT';
const INSERT = 'adminQna/INSERT';
const TOGGLE = 'adminQna/TOGGLE';
const REMOVE = 'adminQna/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
}));

// eslint-disable-next-line no-shadow
export const toggle = createAction(TOGGLE, (id) => id);
// eslint-disable-next-line no-shadow
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  list: [
    {
      id: 1,
      text: '나문희 게시판 테스트1',
    },
    {
      id: 2,
      text: '나문희 게시판 테스트2',
    },
  ],
};

const adminQna = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      list: state.todos.concat(todo),
    }),
    // eslint-disable-next-line no-shadow
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      list: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    // eslint-disable-next-line no-shadow
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      list: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default adminQna;
