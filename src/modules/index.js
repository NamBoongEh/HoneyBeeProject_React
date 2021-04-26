import { combineReducers } from 'redux';
import todos from './todos';
import meetBoard from './meetBoard';
import freeBoard from './freeBoard';

// 루트 리듀서
const rootReducer = combineReducers({
  todos, // 할 일
  meetBoard, // 모임게시판
  freeBoard, // 자유게시판
});

export default rootReducer;
