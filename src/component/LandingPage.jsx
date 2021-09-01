import React from 'react';
import checkLogo from '../static/check.svg';
import {Row, Col, Container} from 'react-bootstrap'
import '../assets/landingpage.css'

function LandingPage() {
    return (
        <Container fluid>
            <Row className=".d-flex">
                <Col className="left" xs={12} sm={12} md={7}>
                    <Row>
                        <div className="img"><img src="https://res.cloudinary.com/darkmancer/image/upload/v1630331377/Horizon_colour_logo_SVG_zmg72f.svg" alt="" /></div>
                        <div className="content">
                            <h2>Welcome to Lightpost!</h2>
                            <img src={checkLogo} alt="" />
                            <p>บัญชีของคุณถูกสร้างเรียบร้อยแล้ว</p>
                            <a href="/">กลับสู่หน้าแรก</a>
                        </div>
                    </Row>
                </Col>
                <Col className="right d-none d-sm-none d-md-block" md={5}></Col>
            </Row>
        </Container>
    )
}

export default LandingPage
