import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  userResp: {},
  emailVerificationResp: {},
};

const userSliice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    pendingResp: (state) => {
      state.isPending = true;
    },
    registrationSucess: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
    respFail: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
    emailVerificationSucess: (state, { payload }) => {
      state.isPending = false;
      state.emailVerificationResp = payload;
    },
  },
});

const { reducer, actions } = userSliice;

export const {
  pendingResp,
  registrationSucess,
  emailVerificationSucess,
  respFail,
} = actions;

export default reducer;
