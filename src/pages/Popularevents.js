import React from 'react'
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { TfiLocationPin } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export default function Popularevents() {
  return (
    <div className='popular-outer-box'>
      <Container>
        <div className='popular-inner-box'>
          <h4 className='popular-heading'>
            All Digital Events (318)
          </h4>
          <div className='butt-outer-box'>
            <span>TIME:</span>
            <Button className='card-butt-popular bg-color-butt' variant="outline-secondary">All</Button>
            <Button className='card-butt-popular' variant="outline-secondary">Today</Button>
            <Button className='card-butt-popular' variant="outline-secondary">Tomorrow</Button>
            <Button className='card-butt-popular' variant="outline-secondary">Weekend</Button>
          </div>
         <br/>

          <div className='butt-outer-box'>
            <span>GENRE:</span>
            <Button className='card-butt-popular' variant="outline-secondary">All Digital Events
            </Button>
            <Button className='card-butt-popular' variant="outline-secondary">Workshops (129)</Button>
            <Button className='card-butt-popular' variant="outline-secondary">Courses (61)</Button>
            <Button className='card-butt-popular' variant="outline-secondary">Theatre & Arts (34)
            </Button>
            <Button className='card-butt-popular' variant="outline-secondary">Health & Wellness (33)

            </Button>
          </div>
          <br/>
          <div className='butt-outer-box'>
            <span>SORT:</span>
            <Button className='card-butt-popular' variant="outline-secondary">Popularity
            </Button>
            
          </div>
        </div>
        <div className='event-listing-box'>
                    {/* <h2 className='event-heading-title'>FEATURED EVENTS</h2> */}
                    <div className='event-com'>
                        <Row>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://img.freepik.com/free-vector/elegant-event-poster-with-black-splash_1361-2193.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://www.cvent.com/sites/default/files/image/2021-02/hybrid-event-content-.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='event-listing-box'>
                    {/* <h2 className='event-heading-title'>FEATURED EVENTS</h2> */}
                    <div className='event-com'>
                        <Row>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://img.freepik.com/free-vector/elegant-event-poster-with-black-splash_1361-2193.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://www.cvent.com/sites/default/files/image/2021-02/hybrid-event-content-.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img'>
                                        <Card.Img className='card-imgs' variant="top" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                        <Card.Text className="card-pra">
                                            {/* <span className='event-icons'><TfiLocationPin />
                                            </span> */}
                                            Carne En Vara Express
                                            23601 SW 187 Ave, Homestead, FL 33031

                                        </Card.Text>
                                        <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                                        <div className='events-butt-buy-ticket'>
                                            <NavLink to="/Eventdetails">
                                                <Button className='card-butt' variant="success">BUY TICKET</Button>
                                            </NavLink>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
      </Container>
    </div>
  )
}
