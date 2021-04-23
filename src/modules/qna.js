const CHANGE = 'qna/CHANGE';

export const change = () => ({ type: CHANGE });

const initialState = {
  page: false,
};

function qna(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        page: !state.page,
      };
    default:
      return state;
  }
}

export default qna;
