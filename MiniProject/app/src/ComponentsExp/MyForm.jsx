import React, { useEffect, useRef } from "react";
// import Button from "react-bootstrap/Button";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const MyForm = ({ setDisplayName }) => {
  const [hideToast, setHideToast] = React.useState(true);
  const [isValid, setIsValid] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState({
    name: false,
    nickname: false,
    email: false,
  });
  const [formData, setFormData] = React.useState({
    name: "",
    nickname: "",
    email: "",
    useNickname: true,
  });
  const [invalidDataMsg, setIvalidDataMsg] = React.useState({
    name: "",
    nickname: "",
    email: "",
  });

  function validateName() {
    const regex = /^[a-zA-Z]*$/;
    const name = formData.name;
    setIvalidDataMsg((prevData) => {
      let message = "";
      if (name.length < 3) {
        message = "Name must be more than 3 characters";
      } else if (!regex.test(name)) {
        message = "Name can only contain alphateic characters";
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
      } else if (!regex.test(nickname)) {
        message = "Nickname can only contain alphateic characters";
      }
      return {
        ...prevData,
        nickname: message,
      };
    });
  }

  function validateEmail() {
    const regex = /^\S+@\S+\.\S+$/;
    const email = formData.email;
    setIvalidDataMsg((prevData) => ({
      ...prevData,
      email: !regex.test(email) ? "Invalid Email" : "",
    }));
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
    validateEmail();
  }, [formData.email]);

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
  function handleSubmit(event) {
    event.preventDefault();
    if (checkValid()) {
      setDisplayName(formData.useNickname ? formData.nickname : formData.name);
      setHideToast(false);
    } else {
      console.log("An error occurred");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        sx={{
          mt: 8,
        }}
        noValidate
      >
        <fieldset>
          <div className="mb-3">
            <TextField
              id="name"
              name="name"
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              error={!!invalidDataMsg.name && firstFocus.name}
              helperText={invalidDataMsg.name}
              onFocus={() =>
                setFirstFocus((prevFocus) => ({ ...prevFocus, name: true }))
              }
              variant="outlined"
            />
          </div>
          <div className="mb-3">
            <TextField
              id="nickname"
              name="nickname"
              label="Nickname"
              value={formData.nickname}
              placeholder="Enter your nickname"
              onChange={handleChange}
              error={!!invalidDataMsg.nickname && firstFocus.nickname}
              helperText={invalidDataMsg.nickname}
              onFocus={() =>
                setFirstFocus((prevFocus) => ({ ...prevFocus, nickname: true }))
              }
              variant="outlined"
            />
          </div>
          <div className="mb-3">
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email address"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              error={!!invalidDataMsg.email && firstFocus.email}
              helperText={invalidDataMsg.email}
              onFocus={() =>
                setFirstFocus((prevFocus) => ({ ...prevFocus, email: true }))
              }
              variant="outlined"
            />
          </div>
          <div className="mb-3">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    id="useNickname"
                    name="useNickname"
                    checked={formData.useNickname}
                    onChange={handleChange}
                  />
                }
                label="Use your nickname as your display name?"
              />
            </FormGroup>
          </div>
          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </fieldset>
      </form>
      <div className="p-3">
        <div>
          <div>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
          </div>
        </div>
        <div>The Form submission was a success!</div>
      </div>
    </>
  );
};

export default MyForm;
