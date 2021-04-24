import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'meetBoard/CHANGE_INPUT';
const INSERT = 'meetBoard/INSERT';
const TOGGLE = 'meetBoard/TOGGLE';
const REMOVE = 'meetBoard/REMOVE';

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
  meetboard: [
    {
      id: 1,
      text: '허니비 모임 게시판 테스트1',
      done: false,
    },
    {
      id: 2,
      text: '허니비 모임 게시판 테스트2',
      done: true,
    },
  ],
};

const meetBoard = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      meetboard: state.meetboard.concat(todo),
    }),
    // eslint-disable-next-line no-shadow
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      meetboard: state.meetboard.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    // eslint-disable-next-line no-shadow
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      meetboard: state.meetboard.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default meetBoard;
