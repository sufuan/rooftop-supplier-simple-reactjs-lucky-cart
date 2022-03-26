import React from 'react';
import './Plant.css'

const Plant = (props) => {
    const {id, img,price,name}=props.plant
    return (
        <div className='col-lg-3'>
           <img src={img} alt="" />
           <h4>{name}</h4>
           <p>price ${price}</p>
           <button>add to cart</button>
        </div>
    );
};

export default Plant;