import React, { useState } from 'react'
import styles from './create.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Drawer from '../../../components/Drawer/drawer'
import Loader from '../../../components/Loader/loader';

const Create = () => {

  const [loading, setLoading] = useState(false);

  const createNow = () => {

  }





  return (
    <Container fluid>
      <Row>
        <Drawer />
        <Col xs={10}>
          <section className={styles.createMainWrap}>
                    <form className={`row ${styles.bookingFormInner}`}>

                      <div className="col-md-12">
                        <label htmlFor="">
                           Name <span className={styles.redBtn}>*</span>
                        </label>
                        <input id="" className="form-control" type=""  />
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="">
                          Description <span className={styles.redBtn}>*</span>
                        </label>
                        <input id="" className="form-control" type=""  />
                      </div>


                      <div className="col-md-12">
                        <label htmlFor="">
                          Rooms <span className={styles.redBtn}>*</span>
                        </label>
                        <input id="" className="form-control" type="" />
                      </div>


                      <div className="col-md-12">
                        <label htmlFor="">
                          Price <span className={styles.redBtn}>*</span>
                        </label>
                        <input id="" className="form-control" type=""  />
                      </div>


                      <div className="col-md-12">
                        <label htmlFor="">
                          Image <span className={styles.redBtn}>*</span>
                        </label>
                        <input id="" className="form-control" type="file" />
                      </div>


                      {loading ? <Loader /> : <button className={`btn btn-primary ${styles.booking_btn}`} onClick={createNow}>Create Now</button>}
                    </form>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Create