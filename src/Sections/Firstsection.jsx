import React from 'react'
import Button from 'react-bootstrap/Button';
import './Main.css';
export default function Firstsection() {
  return (
        <section className='Fistsec'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content-part">
                            <div className="conten-inner">
                            <h1>A Leader in Solar</h1>
                            <p>Industry-leading products and customer service worldwide, with a demonstrated commitment to sustainability.</p>
                            <Button variant="danger">Danger</Button>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
  )
}
