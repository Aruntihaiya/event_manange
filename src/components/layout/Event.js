import React from 'react'
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Card } from 'react-bootstrap';
// import { RiLockLine } from "react-icons/ri";
// import { BsCart3, BsChat, BsGrid3X3GapFill } from "react-icons/bs";
import { FaRegUser, FaList, FaRegCalendarAlt , FaMusic, FaRegSmile, FaSearch} from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";
// import { GoShareAndroid } from "react-icons/go";
// import { IoLocationOutline } from "react-icons/io5";
// import { TfiLocationPin } from "react-icons/tfi";

export default function Event() {
    const objectofimg = [
        { img: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1697012292%2Fkipekexlgmqy9swmg9st.png" },
        { img: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1623313209%2Fwjapklp7hrnalamjkvad.png" },
        { img: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671187157%2Fz8nydm5tr0wtrtvwzyrq.png" },
        { img: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671484417%2Ffm0y9xe0ozzxylrip9ew.png" },
        { img: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1699017495%2Fiimubt6vm9ysnwozbski.png" },
        { img: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1688562270%2Fr7dgxr1e5dawmjyuvujl.png" },

    ]
    return (
        <div className='event-box'>
            <div className='container'>
                <div className='inner-event'>
                    <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <div className='heading-events'>
                       <NavLink to='/Popularevents'>
                        <p className='events-title-shed'>Popular Events</p>
                        </NavLink>
                        <NavLink to='/Freeevents'>
                        <p className='events-title-shed pl-2'>Free Events</p>
                        </NavLink>
                        <NavLink to='/Todaysevent'>
                        <p className='events-title-shed pl-2'>Today's Events</p>
                        </NavLink>
                    </div>
                    </Col>
                     <Col lg={6} md={6} sm={12} xs={12}>
                      <div className='search-outre-box'>
                      <div className='search-inner-box'>
                             <input type='search' placeholder='Search Events' className='input-search' />
                             <span className='search-icon-home'><FaSearch /></span>
                         </div>
                      </div>
                     </Col>

                    </Row>
                   

                    <div className='events-show-box'>
                   
                        <h2 className='event-heading-title'>UPCOMING EVENTS</h2>
                        <Row>
                            {objectofimg.map((element) => {
                                return (
                                    <>
                                        <Col lg={2} md={4} sm={6} xs={12}>

                                            <div className='event-popular'>
                                                <img src={element.img} />
                                            </div>
                                        </Col>
                                    </>
                                )
                            })}
                        </Row>
                    </div>
                </div>
               

                <div className='event-listing-box'>
                    <h2 className='event-heading-title'>RECENTLY VIEWED</h2>
                    <div className='event-com'>
                        <Row>
                            <Col lg={3} md={6} sm={12} xs={12}>
                           <NavLink to="/Eventdetails">
                           <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img rect-event-img'>
                                        <Card.Img className='card-imgs card-rect-img' variant="top" src="https://img.freepik.com/free-vector/elegant-event-poster-with-black-splash_1361-2193.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                           </NavLink>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                            <NavLink to="/Eventdetails">
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img rect-event-img'>
                                        <Card.Img className='card-imgs card-rect-img' variant="top" src="https://www.cvent.com/sites/default/files/image/2021-02/hybrid-event-content-.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                            <NavLink to="/Eventdetails">
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img rect-event-img'>
                                        <Card.Img className='card-imgs card-rect-img' variant="top" src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>

                            <Col lg={3} md={6} sm={12} xs={12}>
                            <NavLink to="/Eventdetails">
                                <Card style={{ width: '17rem' }} className='card-inner-boxs'>
                                    <div className='event-img rect-event-img'>
                                        <Card.Img className='card-imgs card-rect-img' variant="top" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                        </Card.Title>  
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='event-listing-box'>
                    <h2 className='event-heading-title'>FEATURED EVENTS</h2>
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

                
                {/* <div className='event-listing-box'>
                <h2 className='event-heading-title'>MUSIC</h2>
                <div className='event-com'>
                <Row>
                        <Col lg={3} md={6} sm={12} xs={12}>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img className='card-imgs' variant="top" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1696086390%2Fkv1czbqrndnohxudcd2h.jpg" />
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
                                <Card.Img className='card-imgs' variant="top" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1699908096%2Foeg3avspof2lpiy4yd3c.jpg" />
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
                                <Card.Img className='card-imgs' variant="top" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1621689081%2Fcwcr7cgil8utdg2l5sjk.png" />
                                <Card.Body>
                                    <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                    </Card.Title>
                                    <Card.Text className="card-pra">
                                    <span className='event-icons'><TfiLocationPin />
                                        </span>
                                        Carne En Vara Express
                                        23601 SW 187 Ave, Homestead, FL 33031
                                       
                                    </Card.Text>
                                    <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>
                                   
                                    <NavLink to="/Eventdetails">
                                        <Button className='card-butt' variant="success">BUY TICKET</Button>
                                    </NavLink>                                    </Card.Body>
                            </Card>
                        </Col>
                 </Row>
                 </div>
                </div> */}


                <div className='event-listing-box'>
                    <h2 className='event-heading-title'>TRENDING EVENTS</h2>
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


{/* 
                <div className='event-listing-box'>
                <h2 className='event-heading-title'>COMEDY</h2>
                <div className='event-com'>
                <Row>
                        <Col lg={3} md={6} sm={12} xs={12}>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img className='card-imgs' variant="top" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1700259479%2Ftxlvcbuthhwgzlkviabx.jpg" />
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
                                <Card.Img className='card-imgs' variant="top" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1699908096%2Foeg3avspof2lpiy4yd3c.jpg" />
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
                                <Card.Img className='card-imgs' variant="top" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1621689081%2Fcwcr7cgil8utdg2l5sjk.png" />
                                <Card.Body>
                                    <Card.Title className="card-heading">RED HOT | Sunglasses at Night Soiree
                                    </Card.Title>
                                    <Card.Text className="card-pra">
                                    <span className='event-icons'><TfiLocationPin />
                                        </span>
                                        Carne En Vara Express
                                        23601 SW 187 Ave, Homestead, FL 33031
                                       
                                    </Card.Text>
                                    <p className='card-event-time'>Wed, 11/22/2023 @ 10:00 PM</p>
                                   
                                    <NavLink to="/Eventdetails">
                                        <Button className='card-butt' variant="success">BUY TICKET</Button>
                                    </NavLink>                                    </Card.Body>
                            </Card>
                        </Col>
                </Row>
                </div>
                </div> */}
            </div>
        </div>
    )
}

