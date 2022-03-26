import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Plants from './component/Plants/Plants';

const App = () => {
  return (
 <div>
   <div>
      <h1 className='text-center'> Roof Top Tree Supplier</h1>
   </div>
   <div>
   <Plants></Plants>
   
   </div>
 </div>
  );
};

export default App;