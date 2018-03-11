import React from 'react';
import { connect } from 'react-redux';
import AppartementsList from './AppartementsList';
import AppartementsListFilters from './AppartementsListFilters';
import AppartementAddPage from './AppartementAddPage';
import { Link } from 'react-router-dom';

const AppartementsDashboardPage=()=>(
     <div>
        <AppartementsList />
        <AppartementsListFilters />
        <Link to='/addAppartement'>Ajouter un bien</Link>
     </div>
   );

export default AppartementsDashboardPage;
