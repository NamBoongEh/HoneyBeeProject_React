import { combineReducers } from 'redux';
import todos from './todos';
import calendar from './calendar';
import qna from './adminQna';
import meetBoard from './meetBoard';
import freeBoard from './freeBoard';

const rootReducer = combineReducers({
  todos,
  calendar,
  qna,
  meetBoard,
  freeBoard,
});

export default rootReducer;
