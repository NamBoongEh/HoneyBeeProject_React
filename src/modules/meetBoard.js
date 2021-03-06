import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'meetBoard/CHANGE_INPUT';
const INSERT = 'meetBoard/INSERT';
const TOGGLE = 'meetBoard/TOGGLE';
const REMOVE = 'meetBoard/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 15;

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
  meetBoard: [
    {
      id: 1,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트1',
    },
    {
      id: 2,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 3,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 3,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 4,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 5,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 6,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 7,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 8,
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 9,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 10,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 11,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 12,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 13,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
    {
      id: 14,
      date: '2021-04-01',
      text: '허니비 모임 게시판 테스트2',
    },
  ],
};

const meetBoard = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      meetBoard: state.meetBoard.concat(todo),
    }),
    // eslint-disable-next-line no-shadow
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      meetBoard: state.meetBoard.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    // eslint-disable-next-line no-shadow
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      meetBoard: state.meetBoard.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default meetBoard;
