import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-responsive-modal";
import { Button, Form, Input, Label } from "reactstrap";
import { handleAddModal } from "../Redux/Action/action";

function Addmodal({ open, onOpenModal, onCloseModal }) {
  const initialState = {
    name: "",
    email: "",
    role: "",
    address: "",
  };
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  //............
  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = {
      name: user.name,
      email: user.email,
      role: user.role,
      address: user.address,
    };

    console.log("newForm: ", newForm);
    dispatch(handleAddModal(newForm));
    setUser(initialState);
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <Form onSubmit={handleSubmit}>
          <h2>{user.id ? "Edit User" : "Add User"}</h2>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setUser((user) => ({ ...user, name: e.target.value }))
            }
          />
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="email"
            onChange={(e) =>
              setUser((user) => ({ ...user, email: e.target.value }))
            }
          />
          <Label>Role</Label>
          <Input
            type="text"
            placeholder="role"
            onChange={(e) =>
              setUser((user) => ({ ...user, role: e.target.value }))
            }
          />
          <Label>Address</Label>
          <Input
            type="text"
            placeholder="text"
            onChange={(e) =>
              setUser((user) => ({ ...user, address: e.target.value }))
            }
          />
          <center>
            <Button className="bg-info my-4 px-4" type="submit">
              Submit
            </Button>
          </center>
        </Form>
      </Modal>
    </div>
  );
}

export default Addmodal;
