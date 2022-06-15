import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Drawer from '../../../components/Drawer/drawer';
import BASE_URI from '../../../core';
import styles from "./dashboard.module.css";

const Dashboard = () => {


  const [BookingObj, setBookingObj] = useState([]);

  useEffect(() => {
    console.log("get data success")
    GetBookingData();
  }, [])


  const GetBookingData = async () => {
    await axios.get(`${BASE_URI}/booking`)
      .then((res) => {
        setBookingObj(res.data)
      })

      .catch(
        (err) => {
          console.log(err)
        }
      );
  }

  return (
    <>

      <Container fluid>
        <Row>

          <Drawer />


          <Col xs={10}>



          <section className={styles.innerDashbaord}>

            <h2 className={styles.BookingHeading}>Booking List</h2>
            <table>
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Phone </th>
                  <th> Email </th>
                  <th> Cnic </th>
                  <th> Address </th>
                  <th> No of Person </th>
                </tr>
              </thead>

              <tbody>
                {BookingObj.map((Booking, ind) => {
                  return <tr key={ind}>
                    <td> {Booking.name} </td>
                    <td> {Booking.phone}</td>
                    <td> {Booking.email}</td>
                    <td> {Booking.cnic}</td>
                    <td>{Booking.address}</td>
                    <td> {Booking.noOfPerson}</td>
                  </tr>
                  })
                }
              </tbody>
            </table>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard