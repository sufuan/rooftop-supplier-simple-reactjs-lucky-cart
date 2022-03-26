import React, { useEffect, useState } from 'react';
import Plant from '../Plant/Plant';

const Plants = () => {
     const handleCart=(plant)=>{
         console.log(plant);
     }
    const [plants,setPlants]=useState([])
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
                     <h3>cart section</h3>
              </div>
                
            </div>
           
        </div>
    );
};

export default Plants;