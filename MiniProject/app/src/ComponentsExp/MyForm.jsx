import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const MyForm = ({ setDisplayName }) => {
  const [hideToast, setHideToast] = React.useState(true);
  const [isValid, setIsValid] = React.useState(false);
  const [errorMsg, SetErrorMsg] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState({
    name: false,
    nickname: false,
  });
  const [formData, setFormData] = React.useState({
    name: "",
    nickname: "",
  });
  const [invalidDataMsg, setIvalidDataMsg] = React.useState({
    name: "",
    nickname: "",
  });

  function validateName() {
    const regex = /^[a-zA-Z]*$/;
    const name = formData.name;
    setIvalidDataMsg((prevData) => {
      let message = "";
      if (name.length < 3) {
        message = "Heading must be more than 3 characters";
      }
      return {
        ...prevData,
        name: message,
      };
    });
  }

  function validateNickname() {
    const regex = /^[a-zA-Z]*$/;
    const nickname = formData.nickname;
    setIvalidDataMsg((prevData) => {
      let message = "";
      if (nickname.length < 3) {
        message = "Nickname must be more than 3 characters";
      }
      return {
        ...prevData,
        nickname: message,
      };
    });
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  useEffect(() => {
    validateName();
  }, [formData.name]);

  useEffect(() => {
    validateNickname();
  }, [formData.nickname]);

  useEffect(() => {
    setIsValid(checkValid());
  });

  function checkValid() {
    let valid = true;
    Object.values(invalidDataMsg).map((el) => {
      valid = valid && !el;
    });
    return valid;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (checkValid()) {
      const response = await fetch(
        "http://localhost:5000/api/teacher/createUpdate",
        {
          credentials: "include",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            heading: formData.name,
            lessons: formData.nickname,
          }),
        }
      );
      const data = await response.json();
      if (!(response.status === 401)) {
        console.log(data);
        setHideToast(false);
        SetErrorMsg("Made an Update");
      } else {
        setHideToast(false);
        setIsError(true);
        SetErrorMsg("You are unauthorizez");
      }
    } else {
      console.log("An error occurred");
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Heading</Form.Label>
            <Form.Control
              id="name"
              name="name"
              placeholder="Enter your heading"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => {
                setFirstFocus((prevFocus) => ({
                  ...prevFocus,
                  name: true,
                }));
              }}
              isInvalid={!!invalidDataMsg.name && firstFocus.name}
              isValid={!invalidDataMsg.name && !!formData.name}
            />
            <Form.Control.Feedback type={"invalid"}>
              {invalidDataMsg.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nickname">Lessons</Form.Label>
            <Form.Control
              id="nickname"
              name="nickname"
              value={formData.nickname}
              placeholder="Enter lessons"
              onChange={handleChange}
              onFocus={() => {
                setFirstFocus((prevFocus) => ({
                  ...prevFocus,
                  nickname: true,
                }));
              }}
              isInvalid={!!invalidDataMsg.nickname && firstFocus.nickname}
              isValid={!invalidDataMsg.nickname && !!formData.nickname}
            />
            <Form.Control.Feedback type={"invalid"}>
              {invalidDataMsg.nickname}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </fieldset>
      </Form>
      <ToastContainer
        className="p-3"
        position="bottom-center"
        style={{ zIndex: 1 }}
      >
        <Toast
          onClose={() => {
            setHideToast((prevToast) => !prevToast);
          }}
          style={{
            background: !isError ? `#BDF0D6` : "red",
          }}
          show={!hideToast}
        >
          <Toast.Header
            closeButton={true}
            style={{
              background: !isError ? `#BDF0D6` : "red",
            }}
          >
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />

            <strong className="me-auto">{isError ? "Success" : "Error"}</strong>
          </Toast.Header>
          <Toast.Body>{errorMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default MyForm;
