import React, { useState } from 'react';
import './Cartsection.css'

const CartSection = ({cart}) => {
    console.log(cart)
          // get random 
     const [random,setrandom]=useState([])
    //  const [clearCart,setClearCart]=useState([])
    
      const randomName = cart[Math.floor(Math.random()*cart.length)]

      let arr=[random]
      console.log(arr);

      const selectRandom =()=>{
       if(cart && cart.length){
        setrandom(randomName)
       }
          }
    
  // clear  cart screen 

      const handleClearCart=(e)=>{
        setrandom([]) 
      }

       
     
    return (
        <div className='carSection'>
            <h4>selected items </h4>
              {
                cart.map(SelectedName=> <p>{SelectedName.name}</p> )
              }
           <p>
            {
              arr.map(r=> <p><b>you have selected :</b> {r.name}</p> )
            }
           </p>
        
           <button className='btn btn-info me-4' onClick={selectRandom} >Choose lucky one </button> 
           <button className='btn btn-danger' onClick={handleClearCart}>Choose again</button>

{
cart.map(cart=>cart[Math.floor(Math.random()*cart.length)] )
}

        </div>
    );
};

export default CartSection;