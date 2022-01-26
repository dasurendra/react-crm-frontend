import React, { useEffect } from "react";
import { Alert, Card, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { verifyUserEmail } from "../admin-user/userAction";
const EmailVerification = () => {
  const queries = new URLSearchParams(useLocation().search);
  const dispatch = useDispatch();
  const { isPending, emailVerificationResp } = useSelector(
    (state) => state.user
  );

  const otp = queries.get("otp");
  const email = queries.get("email");
  useEffect(() => {
    //call api
    dispatch(verifyUserEmail({ otp, email }));
  }, [dispatch, otp, email]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "500px", padding: "2rem" }}>
        <h2>Validating email ...</h2>

        {isPending && <Spinner variant="primary" animation="border" />}
        {emailVerificationResp.message && (
          <Alert
            variant={
              emailVerificationResp.status === "success" ? "success" : "danger"
            }
          >
            {emailVerificationResp.message}
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default EmailVerification;
