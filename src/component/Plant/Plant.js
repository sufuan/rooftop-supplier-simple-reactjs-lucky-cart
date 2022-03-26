import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Plant.css'


const Plant = (props) => {
    console.log(props.plant.img)
    const {id, img,price,name}=props.plant
    return (
        <div className='col-lg-4 mb-4'>
          <Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>price {price}</p>
    <button className='btn btn-primary'>add to cart</button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Plant;