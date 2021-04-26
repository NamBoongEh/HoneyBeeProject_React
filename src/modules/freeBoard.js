import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'freeBoard/CHANGE_INPUT';
const INSERT = 'freeBoard/INSERT';
const TOGGLE = 'freeBoard/TOGGLE';
const REMOVE = 'freeBoard/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 16;

// 새로운 값 입력
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// 할 일 모듈 그대로 가져옴. 추후 필요없다면 삭제해도 괜찮음.
// eslint-disable-next-line no-shadow
export const toggle = createAction(TOGGLE, (id) => id);

// 기존의 값 삭제
// eslint-disable-next-line no-shadow
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  freeBoard: [
    {
      id: 1,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 2,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 3,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 3,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 4,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 5,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 6,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 7,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 8,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 9,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 10,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 11,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 12,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 13,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 14,
      date: '2021-04-01',
      text: '자게는 지옥이다',
    },
    {
      id: 15,
      date: '2021-04-11',
      text: 'text',
    },
  ],
};

const freeBoard = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      freeBoard: state.freeBoard.concat(todo),
    }),
    // eslint-disable-next-line no-shadow
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      freeBoard: state.freeBoard.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    // eslint-disable-next-line no-shadow
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      freeBoard: state.freeBoard.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default freeBoard;
