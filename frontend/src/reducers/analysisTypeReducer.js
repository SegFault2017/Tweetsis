import { SWITCH_ANALYSIS } from "../actions/types";

const initialState = {
  documentAnalysis: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_ANALYSIS:
      return {
        ...state,
        documentAnalysis: action.payload,
      };
    default:
      return state;
  }
}
