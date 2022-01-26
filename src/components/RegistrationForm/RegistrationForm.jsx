import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";

import { createUser } from "../../pages/admin-user/userAction";
const initialValue = {
  fname: "",
  lname: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  address: "",
  gender: "",
};
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState(initialValue);
  const [passError, setPassError] = useState();
  const { isPending, userResp } = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (passError && name === "confirmPassword") {
      setPassError("");
    }

    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { password } = newUser;
    const { confirmPassword, ...userInfo } = newUser;
    if (password !== confirmPassword) {
      return setPassError("Password did not match");
    }

    dispatch(createUser(userInfo));
  };
  return (
    <div>
      <Card className="p-5 mt-4" style={{ width: "550px" }}>
        <h1>Admin User Registration</h1>

        {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === "success" ? "success" : "danger"}>
            {userResp.message}
          </Alert>
        )}
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              First Name *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="fname"
                placeholder="Sam"
                onChange={handleOnChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Last Name *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="lname"
                placeholder="Smith"
                onChange={handleOnChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              DOB
            </Form.Label>
            <Col sm="9">
              <Form.Control type="date" name="dob" onChange={handleOnChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Email *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="email"
                name="email"
                placeholder="your@email.com"
                onChange={handleOnChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Password *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleOnChange}
                minLength="6"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Confirm Password *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                onChange={handleOnChange}
                minLength="6"
              />
            </Col>
          </Form.Group>
          {passError && <Alert variant="danger">{passError}</Alert>}

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Phone
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="phone"
                placeholder="0410000000"
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Address
            </Form.Label>
            <Col sm="9">
              <Form.Control name="address" placeholder="Sydney, 2000" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Gender
            </Form.Label>
            <Col sm="9">
              <InputGroup>
                <InputGroup.Radio
                  name="gender"
                  value="male"
                  aria-label="Male"
                  onChange={handleOnChange}
                />
                <Form.Label>Male</Form.Label>

                <InputGroup.Radio
                  name="gender"
                  value="female"
                  aria-label="Female"
                  onChange={handleOnChange}
                />
                <Form.Label>Female</Form.Label>
              </InputGroup>
            </Col>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" size="lg">
              Registration
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default RegistrationForm;
