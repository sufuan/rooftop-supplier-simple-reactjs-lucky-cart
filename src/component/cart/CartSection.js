import React, { useState } from 'react';

const CartSection = ({cart}) => {
    console.log(cart)
          // get random 
     const [random,setrandom]=useState([])
    //  const [clearCart,setClearCart]=useState([])
    
      const randomName = cart[Math.floor(Math.random()*cart.length)]

      let arr=[random]

      const selectRandom =()=>{
        setrandom(randomName)
          }
    
  // clear  cart screen 
      const handleClearCart=(cart)=>{
        setrandom([])
      
      }

       
     
    return (
        <div>
              {
                cart.map(SelectedName=> <p>{SelectedName.name}</p> )
              }
           <p>
            {
              arr.map(r=> <p>you have selected :{r.name}</p> )
            }
           </p>
           <button className='btn btn-info me-4' onClick={selectRandom} >Choose lucky one </button> 
           <button className='btn btn-danger' onClick={handleClearCart}>clear</button>

{
cart.map(cart=>cart[Math.floor(Math.random()*cart.length)] )
}

        </div>
    );
};

export default CartSection;