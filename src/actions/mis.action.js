import { SET_MIS, GET_MIS_FAILED } from "./types";

import AuthService from "../services/auth.service";
import MisService from "../services/mis.service";

export const getMis = (page, limit) => (dispatch) => {
  return MisService.getMis(page, limit).then(
    (data) => {
      console.log("HERE", data);
      dispatch({
        type: SET_MIS,
        payload: { mis: data.data.responseData.result },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_MIS_FAILED,
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};
