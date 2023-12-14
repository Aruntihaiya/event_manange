import React from 'react'
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className='footer-section'>
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='footer-listing footer-heading'>
                            <h3>About Us</h3>
                        </div>
                        <ul className='listing-footer-box'>
                            <li className='footer-listing'>Event Calendars</li>
                            <li className='footer-listing'>Sales CRM</li>
                            <li className='footer-listing'>Ticketing</li>
                            <li className='footer-listing'>Print</li>
                            <li className='footer-listing'>Sales Academy</li>
                            <li className='footer-listing'>Schedule Training</li>
                            <li className='footer-listing'>Price Plans</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='footer-listing footer-heading'>    
                          <h3>F.A.Q</h3>
                          </div>
                        <ul className='listing-footer-box'>
                            <li className='footer-listing'>Free Meeting Scheduler App</li>
                            <li className='footer-listing'> Email Tracking Software </li>
                            <li className='footer-listing'>AI Content Writer</li>
                            <li className='footer-listing'>AI Website Generator</li>
                            <li className='footer-listing'>Email Marketing Software</li>
                            <li className='footer-listing'>Lead Management Software</li>
                            <li className='footer-listing'>AI Email Writer</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='footer-listing footer-heading'>
                        <h3>Terms Policy</h3>
                        </div>
                        <ul className='listing-footer-box'>
                            <li className='footer-listing'>Privacy Policy</li>
                            <li className='footer-listing'>Data Processing</li>
                            <li className='footer-listing'>Infrastructure</li>
                            <li className='footer-listing'>Security | CCPA</li>
                            <li className='footer-listing'>Data Request Form</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='footer-listing footer-heading' >
                        <h3>Support</h3>

                        </div>
                        <ul className='listing-footer-box'>
                            <li className='footer-listing'>Blog</li>
                            <li className='footer-listing'>Release</li>
                            <li className='footer-listing'>What's new</li>
                            <li className='footer-listing'>Free templates</li>
                            <li className='footer-listing'>Community</li>
                            <li className='footer-listing'>Help center</li>
                        </ul>
                    </Col>
                </Row>
                <div className='copy-righter'>
                    <p>Copyright ©2022 IMPETROSYS 2023. All rights reserved</p>
                </div>
            </Container>
        </div>
    )
}
