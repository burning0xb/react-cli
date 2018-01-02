import createReducer from '../utils/createReducer';

export const ERROR_SHOW = 'APPLICATION/ERROR_SHOW';
export const ERROR_CLOSE = 'APPLICATION/ERROR_CLOSE';

const initialState = {
  msg: undefined,
  error: undefined
};

const actionHandlers = {
  [ERROR_SHOW]: (state, action) => ({ error: action.error }),
  [ERROR_CLOSE]: () => ({ error: undefined })
};

export default createReducer(initialState, actionHandlers);

export function showError(err) {
  return {
    type: ERROR_SHOW,
    error: err
  };
}

export function closeError() {
  return {
    type: ERROR_CLOSE
  };
}
