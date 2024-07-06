import React from 'react'
import img11 from '../Assets/solar11.jpg';
import Button from 'react-bootstrap/Button';
import Img12 from '../Assets/solar12.jpg';

export default function Fifthsection() {
  return (
    <section className='backc'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center homes'>Why we should be greening our homes with plants</h1>
            <p className='solarpanel'>Solar panel module series provides unparalleled value, aesthetics, and 
              reliability for homeowners while offering layout flexibility, several mounting 
              options, and widespread component compatibility for installers.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
               <div className="imgeleven">
                <img  src={img11} alt=''/>
                <div className="smallbox">
                  <h5>Solar Panel 1</h5>
                  <Button variant="warning">View Details</Button>{' '}
                </div>
               </div>
          </div>
          <div className="col-md-4">
          <div className="imgeleven">
                <img  src={Img12} alt=''/>
                <div className="smallbox">
                  <h5>Solar Panel 2</h5>
                  <Button variant="warning">View Details</Button>{' '}
                </div>
               </div> 
          </div>
          <div className="col-md-4">
          <div className="imgeleven">
                <img  src={img11} alt=''/>
                <div className="smallbox">
                  <h5>Solar Panel 3</h5>
                  <Button variant="warning">View Details</Button>{' '}
                </div>
               </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 text-center">
          <Button className='learn' variant="outline-dark fs-4">LearnMore</Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}
