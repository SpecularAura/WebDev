import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";

export default function TryLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { auth, setAuth, name, setName } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const response = await fetch("http://localhost:5000/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: emailRef.current.value,
          pwd: passwordRef.current.value,
        }),
      });
      const data = await response.json();
      setAuth(data);
      console.log(data);
    } catch (e) {
      setError("Failed to create account.");
      console.log(e);
    }
    setLoading(false);
    navigate("/home");
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>{auth?.username ?? "Username"}</Form.Label>
              <Form.Control type="text" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            {loading ? (
              <div className="d-flex justify-content-center mt-4">
                <Spinner animation="border" />
              </div>
            ) : (
              <Button className="w-100 mt-4" type="submit">
                Log In
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't hava an account? <Link to="/register">Sign up</Link>
      </div>
    </>
  );
}
