import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MyForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    nickname: "",
    useNickname: true,
  });
  function handleChange(event) {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nickname">Name</Form.Label>
          <Form.Control
            id="nickname"
            name="nickname"
            value={formData.nickname}
            placeholder="Enter your nickname"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            name="useNickname"
            checked={formData.useNickname}
            onChange={handleChange}
            label="Use you nickname as your display name?"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
};

export default MyForm;
