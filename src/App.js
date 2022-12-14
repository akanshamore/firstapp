import userEvent from '@testing-library/user-event';
import React from 'react';
//render new p tag if options.length > 0 "here are your options" "no options"
const App = () => {


  let count = 0;
  const addOne = () =>{
    console.log('addOne');

  };
    const minusOne = () =>{

      console.log('minusOne');
    };
  const resetNum =() =>{

    console.log('resetNum');
  };
  const template = (
    <div>
     <h1>Count: {count}</h1>
      <button onClick= {addOne}>+1</button>
      <button onClick = {minusOne}>-1</button>
      <button onClick = {resetNum}>Reset</button>
    </div >
     
      
    
  );





  return (

    <div>

 {template}

      
    </div>
  )


}

export default App;
