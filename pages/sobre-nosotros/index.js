import React from 'react'
import Layout from '../../components/Layout/Layout';
import { Card, Container, Image } from 'react-bootstrap';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
    return (
        <Layout>
            <Container>
                <Card className='p-5 align-items-center' style= {{backgroundColor: '#111131',}}>
                    <h1 style={{color: 'white'}}>Sobre Nosotros</h1>
                    <Footer/>
                </Card>

            </Container>
        </Layout>
    )
}

export default About