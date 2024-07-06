import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

export default function Seventhsection() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='orange'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="whitebox">
                        <h1>Help change the world</h1>
                        <p>Help save the environment and make the switch to solar.
                         Find out which Trina Solar products are perfect for your home, business or project.</p>
                         <Button className='learnthree' variant="outline-warning fs-4">LearnMore</Button>
                    </div>
                </div>
            </div>
            <div className="touch">
            <div className="row">
                <div className="col-md-6">
                    <div className="get">
                        <h1>Get In Touch</h1>
                        <input type='text' placeholder='Enter your FirstName' />
                        <input className='mt-2' type='text' placeholder='Enter your LastName'/>
                        <Button className="warning" onClick={handleShow}>
                            Additional info
                          </Button>

                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Enter your details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Email address</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label>Enter Your Msg</Form.Label>
                                  <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button className="warning" onClick={handleClose}>
                               Submit
                              </Button>
                            </Modal.Footer>
                          </Modal>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="accordian-part">
                        <Accordion className='accord'>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header >Phasellus sed efficitur dolor?</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>fringilla sit amet dolor?</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Aliquam et sem odio?</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Aliquam et sem odio?</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
