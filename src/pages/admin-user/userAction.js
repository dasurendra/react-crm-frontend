import { createNewUser, verifyNewUserEmail } from "../../api/userApi";
import {
  pendingResp,
  registrationSucess,
  respFail,
  emailVerificationSucess,
} from "./userslice";

export const createUser = (userInfo) => async (dispatch) => {
  dispatch(pendingResp());

  //call the api
  const newUser = await createNewUser(userInfo);
  newUser.status === "success"
    ? dispatch(registrationSucess(newUser))
    : dispatch(respFail(newUser));
};

export const verifyUserEmail = (userInfo) => async (dispatch) => {
  dispatch(pendingResp());

  const result = await verifyNewUserEmail(userInfo);

  dispatch(emailVerificationSucess(result));
};
