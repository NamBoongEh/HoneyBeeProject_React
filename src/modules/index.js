import { combineReducers } from 'redux';
import todos from './todos';
import calendar from './calendar';
import qna from './adminQna';
import meetBoard from './meetBoard';

const rootReducer = combineReducers({
  todos,
  calendar,
  qna,
  meetBoard,
});

export default rootReducer;
