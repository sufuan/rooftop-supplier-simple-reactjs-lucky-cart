import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Plant = (props) => {
    console.log()
    const {id, img,price,name}=props.plant
    return (
        <div className='col-lg-4 mb-4'>
          <Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>price {price}</p>
    <button onClick={()=>props.handleCart(props.plant)} className='btn btn-primary'>add to cart < FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Plant;