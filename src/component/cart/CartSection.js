import React, { useState } from 'react';

const CartSection = ({cart}) => {
    console.log(cart)
 
     const [random,setrandom]=useState([])
    
      const randomName = cart[Math.floor(Math.random()*cart.length)]
      const selectRandom =()=>{
       
        setrandom(randomName)
         
      }

      let arr=[random]
      console.log(arr);
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
           <button className='btn btn-info me-4' onClick={selectRandom} >select random</button> 
           {/* <button className='btn btn-danger' onClick={handleClearCart}>clear</button> */}

{
cart.map(cart=>cart[Math.floor(Math.random()*cart.length)] )
}

        </div>
    );
};

export default CartSection;