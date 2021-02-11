import { ADD_AUTHOR } from "../actions/types";

const initialState = {
  name: null,
  profileName: null,
  profileImage: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_AUTHOR:
      return {
        ...state,
        name: action.payload.name,
        profileName: action.payload.profile_name,
        profileImage: action.payload.url,
      };
    default:
      return state;
  }
}
