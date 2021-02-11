import { ADD_CREATED_TIME } from "../actions/types";

const initialState = {
  createdTime: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CREATED_TIME:
      return {
        ...state,
        createdTime: action.payload,
      };
    default:
      return state;
  }
}
