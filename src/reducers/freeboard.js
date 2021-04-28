import produce from 'immer';

export const initialState = {
  freeboardWriteLoading: false,
  freeboardWriteError: null,
  freeboardWriteDone: false,
  freeboardWrite: null,
};

export const FREEBOARD_WRITE_REQUEST = 'FREEBOARD_WRITE_REQUEST';
export const FREEBOARD_WRITE_SUCCESS = 'FREEBOARD_WRITE_SUCCESS';
export const FREEBOARD_WRITE_FAIL = 'FREEBOARD_WRITE_FAIL';
export const FREEBOARD_WRITE_DONE = 'FREEBOARD_WRITE_DONE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
    }
  });
