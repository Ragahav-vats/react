import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../assets/images/s-trouser-004-kajaru-original-imah7m6x646bm9uz.webp'

export default function Show({items,type}) {
    return (
        <>
            <div className={type==1 ? 'col-md-3' : 'col-md-4'}>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={items.image} />
                    <Card.Body className='text-center'>
                        <Card.Title>{items.name}</Card.Title>
                        <h4>Rs {items.price}</h4>
                        <Card.Text>
                            {items.description}
                        </Card.Text>
                        <Button variant="primary" text='center'>Add To Card</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
