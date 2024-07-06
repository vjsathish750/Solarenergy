import React from 'react'
import './Main.css';
import Imgfluid from '../Assets/Solor-img-4.jpg'
export default function Fourthsection() {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center below-content">
                    <h1>Make solar project development easier from start to finish</h1>
                    <p>Our Company offer unprecendented value, reliability, and support to project partners.</p>
                    </div>
                    
                </div>
             </div>
        </div>
        <div className="container-fluid pt-5 pb-5" >
            <div className="fluid-content">
            <div className="row">
                <div className="col-md-6">
                    <div className="fluid-img">
                        <img src={Imgfluid} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fluid-content bg-dark text-white">
                        <h1>Reduce your carbon footprint</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="fluid-content bg-warning">
                        <h1>Reduce your carbon footprint</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fluid-img">
                        <img src={Imgfluid} alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="fluid-img">
                        <img src={Imgfluid} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fluid-content bg-dark text-white">
                        <h1>Reduce your carbon footprint</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
