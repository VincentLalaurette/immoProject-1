import React from 'react';
import { NavLink } from 'react-router-dom';
class Header extends React.Component{
  render(){
    return(
       <header>
       <NavLink exact to="/" activeClassName="is-active">ACCUEIL</NavLink>
       <NavLink to="/catalogue" activeClassName="is-active">CATALOGUE</NavLink>
       <NavLink to="/estimation" activeClassName="is-active">ESTIMATION</NavLink>
        <NavLink to="/agence" activeClassName="is-active">L'AGENCE</NavLink>
       </header>
    );
  };
}

export default Header;
