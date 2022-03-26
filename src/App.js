import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Plants from './component/Plants/Plants';
import Question from './component/Question/Question';

const App = () => {
  return (
 <div>
   <div>
      <h1 className='text-center m-4'> RoofTop Tree Supplier</h1>
   </div>
   <div>
   <Plants></Plants>
   <Question ></Question>
   
   </div>
 </div>
  );
};

export default App;