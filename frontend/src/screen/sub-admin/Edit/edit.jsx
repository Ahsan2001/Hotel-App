import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Drawer from '../../../components/Drawer/drawer'

const Edit = () => {
  return (
    <Container fluid>
      <Row>
        <Drawer />
        <Col xs={10}>
          Edit  Here
        </Col>
      </Row>
    </Container>
  )
}

export default Edit