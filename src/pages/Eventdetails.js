import React from 'react'
import { NavLink } from "react-router-dom";
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { ImLocation2 } from "react-icons/im";
import { MdOutlinePayment, MdAccessTime } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
// import { HiOutlineLanguage } from "react-icons/hi2";
import { useTimer } from 'react-timer-hook';

export default function Eventdetails() {

  function MyTimer({ expiryTimestamp }) {
    const {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div style={{textAlign: 'center'}}>
        {/* <h1>react-timer-hook </h1>
        <p>Timer Demo</p> */}
        <div style={{fontSize: '15px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        {/* <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time)
        }}>Restart</button> */}
      </div>
    );
  }
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600)
  return (
    <div className='event-details-box'>
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <h5 className="card-heading-one">DANDY SHANDY - 90's INTO THE 2000's</h5>
            <div className='details-img'>
              <img src='https://www.cvent.com/sites/default/files/image/2021-02/hybrid-event-content-.jpg' />
            </div>
            <div>
              <p className='event-detalis-pras'>
                Echoes of Earth is India's greenest festival and continue to be India's one-of-a-kind music and lifestyle event that aims to spread a larger message through music, sustainability, and conservation, 2023 marks our 6th Edition. They aim to educate, create awareness, and promote responsible celebration through our festival.
                 into multiple genres of music, engaging our community of musicians and their ardent listeners over two days of the festival. The past editions have seen musicians like Yussef Dayes, Klangphonics, Acid Pauli, Square Pusher, Shigeto Ensemble, and many more.
              </p>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className='details-butt-box'>  <NavLink to={"/Tickets"}>
              <Button className='card-butt-details' variant="danger">BUY NOW</Button>
            </NavLink>
            </div>
            <Card style={{ width: '23rem' }}>
              <Card.Body>
              <Card.Text className='d-flex' >
                  <span className='event-icons-one'><ImLocation2 />
                  </span>
                  <span className="card-pra-one"> Courtyard at Gulfstream Park (Outdoors)
                    901</span>
                </Card.Text>
                <Card.Text className='d-flex'>
                  <span className='event-icons-one'><ImLocation2 />
                  </span>
                  <span className="card-pra-one">New York</span>
                </Card.Text>
               
                <Card.Text className="d-flex">
                  <span className='event-icons-one'><FaRegCalendarAlt />
                  </span>
                  <span className="card-pra-one">Wed, 11/22/2023 @ 10:00 PM</span>
                </Card.Text>
                <Card.Text className="d-flex">
                  <span className='event-icons-one'><MdAccessTime />
                  </span>
                  <span className="card-pra-one"> Timer <MyTimer expiryTimestamp={time} /></span>
                </Card.Text>
                <div className='detalis-sec-card'>
                  <span className='event-icons-one'><MdAccessTime />
                  </span>
                  <div className=''>
                    <Card.Text className="sec-card-heading d-flex">
                      <p className='time-open'>Doors Open : 8:00PM</p>
                    </Card.Text>
                    <Card.Text className="sec-card-pra d-flex">
                      <h5 className='time-opens'> Start : 10:00PM</h5>
                      <h5 className='time-opens'> End : 4:00AM</h5>
                    </Card.Text>
                  </div>
                </div>
                <div className='detalis-one-card mt-3'>
                  <Card.Text className="d-flex">
                    <span className='event-icons-one'><MdOutlinePayment />
                    </span>
                    <span className='sec-card-heading-one'>$3820 Onwards</span>
                  </Card.Text>
                </div>
              
              </Card.Body>
            </Card>
            <div>
    </div>
            {/* <Card style={{ width: '23rem' }} className='mt-3'>
              <Card.Body>
                <Card.Title className="card-heading">Event Guide
                </Card.Title>
                <hr className='hr-line' />
                <div className='detalis-sec-card'>
                  <span className='event-icons-one'><MdAccessTime />
                  </span>
                  <div className='ms-3'>
                    <Card.Text className="sec-card-heading d-flex">
                      <p className='time-open'>Doors Open : 8:00PM</p>
                    </Card.Text>
                    <Card.Text className="sec-card-pra d-flex">
                      <h5 className='time-opens'> Start : 10:00PM</h5>
                      <h5 className='time-opens'> End : 4:00AM</h5>
                    </Card.Text>
                  </div>
                </div>
                <div className='detalis-sec-card mt-4'>
                  <span className='event-icons-one'><HiOutlineLanguage />
                  </span>
                  <div className='ms-3'>
                    <Card.Text className="sec-card-heading">
                      Language
                    </Card.Text>
                    <Card.Text className="sec-card-pra">
                      English
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
