import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Sliding = () => {
    return ( 

        <Carousel className=' carrusel' >
            <Carousel.Item>
                <div className='d-flex  justify-content-center '>
                    <Card style={{ width: '18rem', marginBottom: '35px' }} className='carrusel-card'>
                        <Card.Img variant="top" src={'/assets/img/1.JPG'} />
                        <Card.Body className='carrusel-body'>
                            <Card.Title>Titulo de la carta</Card.Title>
                            <Card.Text>
                                Mas texto que nos pidan que agreguemos.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex  justify-content-center '>
                    <Card style={{ width: '18rem', marginBottom: '35px' }} className='carrusel-card'>
                        <Card.Img variant="top" src={'/assets/img/2.JPG'} />
                        <Card.Body className='carrusel-body'>
                            <Card.Title>Titulo de la carta</Card.Title>
                            <Card.Text>
                                Mas texto que nos pidan que agreguemos.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex  justify-content-center '>
                    <Card style={{ width: '18rem', marginBottom: '35px' }} className='carrusel-card'>
                        <Card.Img variant="top" src={'/assets/img/3.jpeg'} />
                        <Card.Body className='carrusel-body'>
                            <Card.Title>Titulo de la carta</Card.Title>
                            <Card.Text>
                                Mas texto que nos pidan que agreguemos.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default Sliding;