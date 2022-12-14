import userEvent from '@testing-library/user-event';
import React from 'react';
//render new p tag if options.length > 0 "here are your options" "no options"


const App=()=> { 
const onformSubmit= (e)=>{
e.preventDefault();
console.log('form submitted');
};
const user = {


 
title: "indecision app",
subtitle: "put your life in the hands of a computer",
options: "Here are your options"


};





  return (

    <div>
<p>{user.title}</p>
<p>{user.subtitle}</p>
<p>{user.options}</p>
<ol>

  <li>item 1 </li>
  <li>item 2</li>
</ol>
<form onSubmit = {onformSubmit}>
<input type = "text" name = "options"/>

<button>Add Option</button>


</form>

 

      
    </div>
  )
  };


export default App;
