import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Drawer from '../../../components/Drawer/drawer'

const Create = () => {
  return (
    <Container fluid>
      <Row>
        <Drawer />
        <Col xs={10}>
          Create Here
        </Col>
      </Row>
    </Container>
  )
}

export default Create