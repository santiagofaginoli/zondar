import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaInstagram, FaFacebookSquare, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
    return (
        <Container fluid className="footer-bg ">
            <Row className="footer-container ">
                <Col xs={3} className='d-flex flex-column justify-content-center '>
                    <Image
                        alt='Logo'
                        src='/assets/logo.png'
                        width={80}
                        height={80}
                        layout='responsive'
                    ></Image>
                </Col>
                <Col xs={9} >
                    <Row className="footer-links">
                        <Col>
                            <FaInstagram/>
                            <a href="https://instagram.com/proyectozondar?igshid=YmMyMTA2M2Y=" className="redes">Instagram</a>
                        </Col>
                        <Col>
                            <FaFacebookSquare/>
                            <a href="https://www.facebook.com/Zondar-101852792682573" className="redes">Facebook</a>
                        </Col>
                        <Col>
                            <FaYoutube/>
                            <a href="https://www.youtube.com/channel/UCg2zpHaXs2gxJVmAB48aakQ" className="redes">Youtube</a>
                        </Col>
                        <Col>
                            <FaTiktok/>
                            <a href="https://www.tiktok.com/@proyectozondar_?_t=8W9LVBEz8bO&_r=1" className="redes">TikTok</a>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Container>
    )
}

export default Footer