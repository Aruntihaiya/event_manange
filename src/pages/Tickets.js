import React, { useState } from 'react'
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import Silderhome from '../components/layout/Silderhome';
import { FaUser } from "react-icons/fa";
export default function Tickets() {
  const [counter, setcounter] = useState(0)
  const onClickfunction1 = () =>{
    setcounter(counter + 1);
  }
  const onClickfunction2 = () =>{
    if (counter <= 1) {
      alert("Atleast You Have One Item")
    } else {
      setcounter(counter - 1);
    }
  }
  return (
    <section>
      <Silderhome />
      <div className='tickets-event-summery'>
        <Container>
          {/* <div className='ticket-details-box'> */}
            <Row>
              <Col lg={8} md={8} sm={12} xs={12}>
                <div className='checkout-widget tick-inner-section-one'>
                  <div className='title-heading'>
                    <h4>Already Have An Account?</h4>
                    <p>Sign in to earn points and make booking easier!</p>
                  </div>
                  <div className='title-heading-right'>
                    <span className='user-icon'><FaUser /></span> Signin
                  </div>
                </div>
                <div class="checkout-widget checkout-contact">
                  <div className='title-heading'>
                  <h4 class="title">Get Your Tickets</h4>
                  </div>
                  <Row>
                    <Col sm={6} md={4}>
                      <div class="sports-ticket style-two">
                        <span class="cate">best view</span>
                        <h2 class="ticket-title"><sup>$</sup>50</h2>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div class="sports-ticket style-two">
                        <span class="cate">comfort zone</span>
                        <h2 class="ticket-title"><sup>$</sup>79</h2>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div class="sports-ticket style-two">
                        <span class="cate">single tickets</span>
                        <h2 class="ticket-title"><sup>$</sup>99</h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} xl={5}>
                      <span class="number-seats">Number of Seats : </span>
                      <div className="product-qunti-box">
                        <div className="qtyminus"  onClick={onClickfunction2}>
                          -
                        </div>
                        <div className="qnt">{counter}</div>
                        <div className="qtyplus" onClick={onClickfunction1}>
                          +
                        </div>
                      </div>

                    </Col>
                    <Col md={6} xl={7}>
                      <form class="checkout-contact-form mb-0">
                        <input type="text" placeholder="Please enter promo code" className='inp-box' />
                        <Button className='button-of-verify' variant="secondary">Verify</Button>
                      </form>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className='checkout-widget ticket-outer-box'>
                  <div className='ticket-infr title-heading'>
                    <h4>BOOKING SUMMERY</h4>
                    <div className='section-info-one'>
                      <h5 className='heading-h5-tickets'>VENUS</h5>
                      <p className='pra-color'>ENGLISH-2D</p>
                      <div className='info-inner-section'>
                        <div className='heading-one'>
                          <h5 className='heading-h5-tickets'>CITY WALK</h5>
                          <h5 className='heading-h5-tickets'>02</h5>
                        </div>
                        <div className='heading-one'>
                          <p className='pra-color'>10 SEP TUE, 11:00 PM</p>
                          <p className='pra-color'>TICKETS</p>
                        </div>
                      </div>
                      <div className='heading-one'>
                        <h5 className='heading-h5-tickets'>TICKETS PRICE</h5>
                        <h5 className='heading-h5-tickets'>$150</h5>
                      </div>

                    </div>
                    <div className='section-info-one'>
                      <div className='heading-one'>
                        <h5 className='heading-h5-tickets'>COMBOS</h5>
                        <h5 className='heading-h5-tickets'>$57</h5>
                      </div>
                      <p className='pra-color'>2 NACHOS COMBO</p>
                      <h5 className='heading-h5-tickets'>FOOD & BEVARAGE</h5>
                    </div>
                    <div className='heading-one'>
                      <p className='pra-color'>PRICE</p>
                      <p className='pra-color'>$20</p>
                    </div>
                    <div className='heading-one'>
                      <p className='pra-color'>VAT</p>
                      <p className='pra-color'>$6</p>
                    </div>
                    <div>
                      <div className='heading-one'>
                        <h5 className='amount-heading-tickets'>AMOUNT PAYABLE</h5>
                        <h5 className='amount-heading-tickets'>$250</h5>
                      </div>
                      <div className='ticket-amount-but'>
                        <Button className='amount-butt' variant="success">BUY TICKET</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          {/* </div> */}
        </Container>
      </div>
    </section>
  )
}
