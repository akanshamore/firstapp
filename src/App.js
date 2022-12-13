import React from 'react';

const App = () => {

  var app = {

    
    subtitle: "put your life in the hands of a computer",



  }
  function gettitle(title) {

    if (title) {

      return title;
    }

    
  }




  return (


    <div>


      <p>{app.title? app.title : "anonymous"}</p>
      <p>{app.subtitle}</p>
      <p>{gettitle(app.title)}</p>

      <ol>
        <li>item one</li>
        <li>item two</li>

      </ol>

    </div>
  )









}

export default App;
