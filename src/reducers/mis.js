import { SET_MIS, GET_MIS_FAILED } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MIS:
      return {
        ...state,
        mis: payload.mis,
      };

    default:
      return state;
  }
}
