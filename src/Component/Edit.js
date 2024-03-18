import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-responsive-modal";
import { Button, Form, Input, Label } from "reactstrap";
import { handleAddModal, handleEdit } from "../Redux/Action/action";
import { configure } from "@testing-library/react";

function Edit({ open, onOpenModal, onCloseModal, formDataById }) {
  const initialState = {
    name: formDataById?.name || "",
    email: formDataById?.email || "",
    role: formDataById?.role || "",
    address: formDataById?.address || "",
  };
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  //............
  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = {
      id: formDataById?.id,
      name: user.name,
      email: user.email,
      role: user.role,
      address: user.address,
    };

    console.log("newForm: ", newForm);
    dispatch(handleEdit(newForm));
    setUser(initialState);
  };

  useEffect(() => {
    setUser(initialState);
  }, [formDataById]);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <Form onSubmit={handleSubmit}>
          <h2>EditModail</h2>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setUser((user) => ({...user, name: e.target.value }))
            }
            value={user?.name}
          />
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="email"
            onChange={(e) =>
              setUser((user) => ({ ...user, email: e.target.value }))
            }
            value={user?.email}
          />
          <Label>Role</Label>
          <Input
            type="text"
            placeholder="role"
            onChange={(e) =>
              setUser((user) => ({ ...user, role: e.target.value }))
            }
            value={user?.role}
          />
          <Label>Address</Label>
          <Input
            type="text"
            placeholder="text"
            onChange={(e) =>
              setUser((user) => ({ ...user, address: e.target.value }))
            }
            value={user.address}
          />
          <center>
            <Button className="bg-info my-4 px-4" type="submit">
              Update
            </Button>
          </center>
        </Form>
      </Modal>
    </div>
  );
}

export default Edit;
