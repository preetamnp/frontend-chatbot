import { POST_MESSAGE } from '../actions/ActionsTypes';

let defaultState = {
  message: undefined
};

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case POST_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
}