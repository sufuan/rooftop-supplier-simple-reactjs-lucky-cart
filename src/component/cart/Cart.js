import React from 'react';
import './Cart.css'
const cart = ({cart}) => {
    console.log(cart.length);

  
    return (
        <div>
                <h1>hello cfr</h1>
                {
                    cart.map(pd=><li>{pd.name}</li>)
                }
        </div>
    );
};

export default cart;