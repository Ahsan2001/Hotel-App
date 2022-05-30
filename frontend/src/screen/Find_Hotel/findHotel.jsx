import React from 'react';
import styles from './findHotel.module.css';


const FindHotel = () => {
  return (

    <React.Fragment>
        <section className={styles.FindHotel}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto" >
                        <div className={styles.inner_content} >
                            <h2>Welcome. userName</h2>
                            <h2>Find an hotel to stay.</h2>
                            <form>
                                <input className='form-control' placeholder='Name, City' type="search" name="" id="" />
                                <button>Search</button>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default FindHotel