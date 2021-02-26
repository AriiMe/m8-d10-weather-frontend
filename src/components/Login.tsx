
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

export default function Login(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginFetch = async (e: any) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:9001/users/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resp = await response.json();
      console.log("HERERER", resp)
      if (resp.token) {
        localStorage.setItem("accessToken", resp.token);
        localStorage.setItem("refreshToken", resp.refresh);
        props.history.push("/home");
        console.log("HEREREE",props.history)
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="mt-0">
      <Row>
        <Col xs={12}>
          <h1 className="text-center">Login</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form onSubmit={loginFetch}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Addresss"
                value={email}
                required
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Form.Group>
            <Button variant="dark" className="w-100" type="submit">
            iwannadiepleasekillmealreadyyeetyeetyeetyeet abdul goes skrrrahh, pap, pap, ka-ka-ka
Skibiki-pap-pap, and a pu-pu-pudrrrr-boom
Skya, du-du-ku-ku
            </Button>
            <hr />
            <a href="http://localhost:9001/users/googleLogin">
              {" "}
              <GoogleButton
                style={{ position: "absolute", left: "39%" }}
                type="dark" // can be light or dark
              />
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
