import { SET_LOADING } from "../actions/types";

const initialState = {
  applicationLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        applicationLoading: action.payload,
      };
    default:
      return state;
  }
}
