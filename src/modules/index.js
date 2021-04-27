import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todos from './todos';
import meetBoard from './meetBoard';
import freeBoard from './freeBoard';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';

// 루트 리듀서
const rootReducer = combineReducers({
  todos, // 할 일
  meetBoard, // 모임게시판
  freeBoard, // 자유게시판
  auth,
  loading,
  user, // 어드민 페이지 유저임
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
