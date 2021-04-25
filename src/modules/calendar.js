import { createAction, handleActions } from 'redux-actions';

const SHOW_INPUT = 'calendar/SHOW_INPUT';

export const showInput = createAction(SHOW_INPUT, (id) => id);

const initialState = {
  set: '',
  calendar: [
    {
      id: '4/4',
      show: false,
    },
  ],
};

const calendar = handleActions(
  {
    [SHOW_INPUT]: (state, { payload: id }) => ({
      ...state,
      calendar: state.calendar.map((p) =>
        p.id === id ? { ...p, show: !p.show } : p
      ),
    }),
  },
  initialState
);

export default calendar;
