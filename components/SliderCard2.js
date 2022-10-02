import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Sliding = () => {
    return ( 
        <Carousel className=' carrusel' >
            <Carousel.Item>
                <Card style={{ width: '18rem', marginBottom: '35px' }} className='carrusel-card'>
                    <Card.Img variant="top" src="https://bangbranding.com/blog/wp-content/uploads/2016/09/700x511_SliderInterior.jpg" />
                    <Card.Body className='carrusel-body'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card style={{ width: '18rem', marginBottom: '35px' }} className='carrusel-card'>
                    <Card.Img variant="top" src="https://bangbranding.com/blog/wp-content/uploads/2016/09/700x511_SliderInterior.jpg" />
                    <Card.Body className='carrusel-body'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card style={{ width: '18rem', marginBottom: '35px' }} className='carrusel-card'>
                    <Card.Img variant="top" src="https://bangbranding.com/blog/wp-content/uploads/2016/09/700x511_SliderInterior.jpg" />
                    <Card.Body className='carrusel-body'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default Sliding;