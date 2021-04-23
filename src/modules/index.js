import { combineReducers } from 'redux';
import todos from './todos';
import calendar from './calendar';
import qna from './qna';

const rootReducer = combineReducers({
  todos,
  calendar,
  qna,
});

export default rootReducer;
