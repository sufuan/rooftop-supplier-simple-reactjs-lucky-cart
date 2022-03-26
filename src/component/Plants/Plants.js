import React, { useEffect, useState } from 'react';
import Plant from '../Plant/Plant';
import Cart from '../cart/Cart';
const Plants = () => {
     const handleCart=(plant)=>{
         console.log(plant);
         const newCart =[...cart,plant]
         setCart(newCart)
     }
    const [plants,setPlants]=useState([])
    const [cart,setCart]=useState([])


    useEffect(()=>{
        fetch('Plants.json')
        .then(res=>res.json())
        .then(data=>setPlants(data))
    },[])
        
    return (
        <div>
            <div className="row container">
              <div className="col-lg-9">
                    <div className="row">
                    {
                     plants.map((plant)=> <Plant
                      key={plant.id}
                       plant={plant}
                       handleCart={handleCart}
                       ></Plant>)
                 }
                    </div>
              </div>
              <div className="col-lg-3">
                  <h1>total ={cart.length}</h1>
                <Cart cart={cart}></Cart>
              </div>
                
            </div>
           
        </div>
    );
};

export default Plants;