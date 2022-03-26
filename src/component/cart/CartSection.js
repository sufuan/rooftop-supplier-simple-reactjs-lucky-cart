import React, { useState } from 'react';

const CartSection = ({cart}) => {
    console.log(cart)
 
     const [clearCart,setClearCart]=useState([])
  
      const selectRandom =()=>{
        const cas = cart[Math.floor(Math.random()*cart.length)]
        console.log(cas.name );
      }
      const handleClearCart=()=>{
        setClearCart([])
        console.log(cart);
    }

   
    
    return (
        <div>
           {
               cart.map(cart=>console.log(cart.name))
           }
           <button onClick={selectRandom} >select ramdom</button>
           <button onClick={handleClearCart}>clear</button>


        </div>
    );
};

export default CartSection;