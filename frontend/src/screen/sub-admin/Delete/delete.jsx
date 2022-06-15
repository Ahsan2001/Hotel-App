import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Drawer from '../../../components/Drawer/drawer'

const Delete = () => {
  return (
    <Container fluid>
      <Row>
        <Drawer />
        <Col xs={10}>
          Delete  Here
        </Col>
      </Row>
    </Container>
  )
}

export default Delete