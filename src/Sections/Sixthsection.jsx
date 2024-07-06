import React from 'react'
import Button from 'react-bootstrap/Button';
import Rimg from '../Assets/Solor-img-6.jpg';

export default function Sixthsection() {
  return (
    <section>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 energy">
                    <h1>Energy Freedom with Solar and Storage</h1>
                </div>
                <div className="col-md-4 ">
                    <p className='fs-4 pt-5'>Vulputate dignissim suspendisse in est ante in nibh mauris. Neque aliquam vestibulum 
                        morbi blandit cursus risus. Nisi est sit amet facilisis. Volutpat commodo sed egestas egestas. Id leo in vitae turpis 
                        massa sed elementum tempus. Non curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                        <Button className='learntwo' variant="outline-warning fs-4">LearnMore</Button>
                </div>
                <div className="col-md-4">
                     <div>
                        <img className="rimg" src={Rimg} alt=''/>
                     </div>
                </div>
            </div>
        </div>
    </section>
  )
}
