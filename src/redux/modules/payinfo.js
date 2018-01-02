import createReducer from '../utils/createReducer';

export const SUBMIT = 'PAYINFO/SUBMIT';
export const SUBMIT_SUCCESS = 'PAYINFO/SUBMIT_SUCCESS';
export const SHOW_ERROR = 'PAYINFO/SHOW_ERROR';
const initialState = {
  payinfo: undefined,
  filter: {},
  msg: undefined,
  result: undefined,
  valid: undefined
};
const actionHandlers = {
  [SUBMIT]: () => ({}),
  [SUBMIT_SUCCESS]: () => ({ msg: 'rpc get users', state: 0 }),
  [SHOW_ERROR]: (state, action) => ({ error: action.response })
};
export default createReducer(initialState, actionHandlers);
export function submitSuccess(response, filter) {
  return dispatch => {
    dispatch({
      type: SUBMIT_SUCCESS,
      response, filter
    });
  };
}

export function submit(filter, actPage) {
  return dispatch => {
    dispatch({
      type: SUBMIT,
      apiRequest: (rpc) => rpc.pagerPost('/param/getOrgList', filter, actPage),
      actions: {
        success: (response) => submitSuccess(response, filter)
      }
    });
  };
}
