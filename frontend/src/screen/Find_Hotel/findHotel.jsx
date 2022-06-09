import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MetaData from '../../components/MetaData/title';
import BASE_URI from '../../core';
import styles from './findHotel.module.css';

const FindHotel = () => {

    const navigate = useNavigate();
    const [showData , setShowData] = useState("")
    const [successData, setSuccessData] = useState(false)


    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };




    const viewDetail = (product) => {
        navigate(`../Room-Detail/${product._id}`, 
        { state: { id: product._id } })
    }





    const getMyHotel = async (e) => {
        e.preventDefault();
        console.log(inputText)
        

        try {
            await axios.get(`${BASE_URI}/hotel/?keyword=${inputText}`)
                .then(res => {

                    if ( res.data.counts == 0 ){
                        alert("Hotel Not Found")
                    }

                    else if( inputText === "" ) {
                        alert("Hotel Not Found")
                    }

                    else{
                        setShowData(res.data.hotels)
                        setSuccessData(true)
                        console.log(showData)
                    }                
                }

                )
                .catch(err => { console.log(err) })
        }

        catch (error) {
            console.log("not getting Data  ERROR", error)
        }
    }




  return (

    <React.Fragment>
          <MetaData title={"Find Now  "} />
        <section className={styles.FindHotel}>
            <Container>
                <Row>
                    <Col xs={9} className=" mx-auto" >
                        <div className={styles.inner_content} >
                            <h2>Welcome. userName</h2>
                            <h2>Find an hotel to stay.</h2>
                            <form>
                                <input onChange={inputHandler} className='form-control' placeholder='Name, City' type="search" name="" id="" />
                                <button onClick={getMyHotel}>Search</button>
                            </form>
                        </div> 
                      </Col>
                </Row>
              </Container>
        </section>



        <section className='showDatainFind'>
            <Container>
                <Row>
                    <Col xs={12}>

                        <div className="innerContent">

                            <Row>

                                   
                            
                            {

                                successData ?
                                showData.map((data , ind) =>{
                                    return (
                                        <Col xs={4} key={ind}>
                                            <div className={styles.inner_card_main}>
                                                <img src={data.images[0].url} />
                                                <h6> {data.name}</h6>
                                                <h6>Price $ <span> {data.price} </span> </h6>
                                                <button onClick={() => {
                                                    viewDetail(data)
                                                }}>View Detail</button>
                                            </div>
                                        </Col>
                                    )
                                })
                            :
 
                            null
                            }

                            </Row> 


                        </div>
                         
                    </Col>
                </Row>
            </Container>
        </section>




    </React.Fragment>
  )
}

export default FindHotel