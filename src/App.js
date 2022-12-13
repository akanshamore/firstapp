import userEvent from '@testing-library/user-event';
import React from 'react';

const App = () => {

  var app = {


    subtitle: "put your life in the hands of a computer",
    age: 26,



  }
  function getTitle(title) {

    if (title) {

      return title;
    }


  }

  var user = {

    name: "akansha",
    age: 28,
    location: 'India',

  }


  function getName(name) {

    if (name) {

      return name;
    }

    else {

      return 'unknown';
    }
  }


  return (
    <div>


      <h1>{user.name}</h1>
      {user.age}
      {getName(user.name)}




      <p>{app.title ? app.title : "anonymous"}</p>
      <p>{app.subtitle}</p>
      <p>{getTitle(app.title)}</p>
      {user.age >= 28 && <p>{user.age}</p>}

      <ol>
        <li>item one</li>
        <li>item two</li>

      </ol>

    </div>
  )


}

export default App;
