import React from 'react'
import "./Main.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imgpart from '../Assets/Solor-img-7.jpg';
import Icon1 from '../Assets/icons-1.png'
import Icon2 from '../Assets/icons-2.png'
import Icon3 from '../Assets/icons-3.png'
import Icon4 from '../Assets/icons-4.png'
import Img5 from "../Assets/Solor-img-5.jpg"


export default function Thirdsection() {
  return (
        <section className='Thirdsection'>
            <div className="container">
                <div className="row top">
                <div className="col-md-12">
                    <div className="img-part ">
                        <img src={Imgpart} alt="" />
                       <div className="icon-details">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="icon-part ">
                                        <img src={Icon1} alt="" />
                                        <h1>Inverter inspection</h1>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="icon-part ">
                                        <img src={Icon2} alt="" />
                                        <h1>Inverter inspection</h1>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="icon-part ">
                                        <img src={Icon3} alt="" />
                                        <h1>Inverter inspection</h1>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="icon-part ">
                                        <img src={Icon4} alt="" />
                                        <h1>Inverter inspection</h1>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                </div>
                <div className="row pb-4">
                <div className="col-md-12">
                    <h1 className='text-center'>Simplified project development for a complex world</h1>
                </div>
                <div className="col-md-4 ">
                <Card className='cardimg' > 
                <Card.Img variant="top"  src={Img5}/>
                <Card.Body>
                <Card.Title>Residential Solutions</Card.Title>
                <Card.Text>
                 Save on your electricity bills, reduce your carbon footprint and increase the value of your home.x
                </Card.Text>
                <a><p>More</p></a>
                </Card.Body>
                </Card>
                </div>
                <div className="col-md-4">
                <Card className='cardimg' > 
                <Card.Img variant="top"  src={Img5}/>
                <Card.Body>
                <Card.Title>Residential Solutions</Card.Title>
                <Card.Text>
                 Save on your electricity bills, reduce your carbon footprint and increase the value of your home.x
                </Card.Text>
                <a><p>More</p></a>
                </Card.Body>
                </Card>
                </div>
                <div className="col-md-4">
                <Card className='cardimg' > 
                <Card.Img variant="top"  src={Img5}/>
                <Card.Body>
                <Card.Title>Residential Solutions</Card.Title>
                <Card.Text>
                 Save on your electricity bills, reduce your carbon footprint and increase the value of your home.x
                </Card.Text>
                <a><p>More</p></a>
                </Card.Body>
                </Card>
                </div>
                </div>
            </div>
        </section>
  )
}
