import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-modal/styles.css";
import { Button, Col, Container, Row, Table } from "reactstrap";
import { handleDelete, handlegetModal } from "../Redux/Action/action";
import Addmodal from "./Addmodal";
import Edit from "./Edit";

const Home = () => {
  const dispatch = useDispatch();

  const usersData = useSelector((state) => state.reducer.modal);
  console.log("usersData: ", usersData);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(!open);
  const onCloseModal = () => setOpen(!open);
  const [formDataById, setFormDataById] = useState(null);
  console.log('formDataById: ', formDataById);

  const handleEdit = (id) => {
    const newData = usersData.find((item, index) => index === id);
    setFormDataById(newData);
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(handlegetModal());
  }, []);

  return (
    <>
      <Container className="bg-light border">
        <Row className="main bg-light p-3">
          <Col xs="12">
            <h1 className="text-center mb-4">Crud App</h1>
          </Col>
          <Row>
            <Col xs="12" className="d-flex justify-content-end mb-4">
              <Button color="primary" className="mx-4" onClick={onOpenModal}>
                Add
              </Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs="12">
              <Table>
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user, index) => (
                    <tr key={index}>
                      <th scope="row">{user.name}</th>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.address}</td>
                      <td>
                        <div>
                          <Button
                            color="success"
                            className="mx-4"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </Button>
                          <Button
                            color="danger"
                            onClick={() => dispatch(handleDelete(user.id))}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Row>
      </Container>
      <Addmodal
        open={open}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />

      <Edit
        open={open}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        formDataById={formDataById}
      />
    </>
  );
};

export default Home;
