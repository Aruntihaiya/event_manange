import React from 'react'
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { TfiLocationPin } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
export default function Freeevents() {
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
        <Row>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/108731_event_lg_348.jpeg" />
              <Card.Body>
                <Card.Title className="card-heading">Stone Love - Forever Young 51st Anniversary</Card.Title>
                <Card.Text className="card-pra">
                  The Readiness Center
                  5001 Flamingo Miramar, FL 33027
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/108503_event_lg_246.jpeg" />
              <Card.Body>
                <Card.Title className="card-heading">DANDY SHANDY - 90's INTO THE 2000's</Card.Title>
                <Card.Text className="card-pra">
                  Courtyard at Gulfstream Park (Outdoors)
                  901 Beach, FL
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/109879_event_md_57.png" />
              <Card.Body>
                <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                </Card.Title>
                <Card.Text className="card-pra">
                  Carne En Vara Express
                  23601 SW 187 Ave, Homestead, FL 33031
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/109879_event_md_57.png" />
              <Card.Body>
                <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                </Card.Title>
                <Card.Text className="card-pra">
                  Carne En Vara Express
                  23601 SW 187 Ave, Homestead, FL 33031
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
        </Row>
      <br/>
        <Row>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/108731_event_lg_348.jpeg" />
              <Card.Body>
                <Card.Title className="card-heading">Stone Love - Forever Young 51st Anniversary</Card.Title>
                <Card.Text className="card-pra">
                  The Readiness Center
                  5001 Flamingo Miramar, FL 33027
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/108503_event_lg_246.jpeg" />
              <Card.Body>
                <Card.Title className="card-heading">DANDY SHANDY - 90's INTO THE 2000's</Card.Title>
                <Card.Text className="card-pra">
                  Courtyard at Gulfstream Park (Outdoors)
                  901 Beach, FL
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/109879_event_md_57.png" />
              <Card.Body>
                <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                </Card.Title>
                <Card.Text className="card-pra">
                  Carne En Vara Express
                  23601 SW 187 Ave, Homestead, FL 33031
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Card style={{ width: '17rem' }}>
              <Card.Img className='card-imgs' variant="top" src="https://vboblobprod.blob.core.windows.net/awsvboticketscom/_images/events/109879_event_md_57.png" />
              <Card.Body>
                <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                </Card.Title>
                <Card.Text className="card-pra">
                  Carne En Vara Express
                  23601 SW 187 Ave, Homestead, FL 33031
                  <span className='event-icons'><TfiLocationPin />
                  </span>
                </Card.Text>
                <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>

                <NavLink to="/Eventdetails">
                  <Button className='card-butt' variant="success">BUY TICKET</Button>
                </NavLink>                                    </Card.Body>
            </Card>
          </Col>
        </Row>


      </div>
    </Container>
  </div>
  )
}
