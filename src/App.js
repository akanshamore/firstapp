import userEvent from '@testing-library/user-event';
import React from 'react';

const App = () => {

  var app = {


    subtitle: "put your life in the hands of a computer",
    age: 26,



  }
  function gettitle(title) {

    if (title) {

      return title;
    }


  }




  return (


    <div>


      <p>{app.title ? app.title : "anonymous"}</p>
      <p>{app.subtitle}</p>
      <p>{gettitle(app.title)}</p>
      {app.age >= 28 && <p>{app.age}</p>}

      <ol>
        <li>item one</li>
        <li>item two</li>

      </ol>

    </div>
  )









}

export default App;
