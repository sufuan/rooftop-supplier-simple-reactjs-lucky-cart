import React, { useEffect, useState } from 'react';
import Plant from '../Plant/Plant';

const Plants = () => {

    const [plants,setPlants]=useState([])
    useEffect(()=>{
        fetch('Plants.json')
        .then(res=>res.json())
        .then(data=>setPlants(data))
    },[])
        
    return (
        <div>
            <div className="row">
              <div className="col-lg-9">
                    <div className="row">
                    {
                     plants.map((plant)=> <Plant key={plant.id} plant={plant}></Plant>)
                 }
                    </div>
              </div>
              <div className="col-lg-3">
<h3>jj</h3>
              </div>
                
            </div>
           
        </div>
    );
};

export default Plants;