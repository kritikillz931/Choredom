import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CardBody, CardText, CardTitle, Card, Modal, ModalBody, ModalHeader } from "reactstrap";
import { LoginExistingUser, RegisterNewUser, SignInWithGoogle } from "../firebase";
import googlelogo from "../images/Google.jpg"
import "./AuthenticationPage.css"


export const AuthenticationPage = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div>
      <Card className="cardContainer">
        <CardBody>
          <CardTitle tag="h5">
            Choredom Logo Here
          </CardTitle>
          <CardText>
            <LoginExistingUser />
            <div className="registerUserContainer">
              <div className="registerUserLink">
                <p onClick={(e) => {
                  e.preventDefault()
                  toggle()
                }}>Register new user</p>
              </div>
              <Modal isOpen={modal}>
                <ModalHeader charcode="Y"
                  toggle={() => toggle()}>
                </ModalHeader>
                <RegisterNewUser />
              </Modal>
            </div>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}
