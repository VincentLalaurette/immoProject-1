import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppartementItem = ({id, prix, quartier, superficie, genre, dispatch }) => {

  return(
    <div>
  <Link to={`/editAppartement/${id}`}>
    <ul>
      <li>{genre}</li>
      <li>{superficie} m2</li>
      <li>{quartier}</li>
      <li>{prix} €</li>
      <li>{id}</li>
    </ul>
    </Link>
    </div>
  );
}

export default connect()(AppartementItem);
