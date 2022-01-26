import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  return (
    <div>
      <Container className="shadow-lg ">
        <Row className=" justify-content-center">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto  rounded-lg">
            <h1 className=" text-center mt-5 py-3 text-secondary ">Login</h1>
            <Form>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
              />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Your Password" />

              <Row className="align-middle">
                <Button variant="success" className="mt-4 btn-lg ">
                  LogIn
                </Button>
              </Row>
            </Form>

            <h4 className="mt-4 text-center">
              Don't have account? <Button className="btn-lg">Sign up</Button>
            </h4>
          </Col>
        </Row>

        <h6 className="mt-5 p-5 text-center text-secondary ">
          Copyright © 2022. All Rights Reserved.
        </h6>
      </Container>
    </div>
  );
};

export default LoginForm;
