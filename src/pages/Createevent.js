import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
export default function Createevent() {
  return (
    <div>
        <Container>
            <NavLink to={"/Organizersignin"}>
            <h1>login page</h1>
            </NavLink>
        </Container>
    </div>
  )
}
