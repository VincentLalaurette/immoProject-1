import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component{

  render(){
    return(
    <div>
      <h2>Home sweet home</h2>
      <a href="http://localhost:4000/back">Lien vers le back</a>
    </div>

    );
  };
}

export default Home;
