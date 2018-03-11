import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Estimation from './Estimation.js';
import Home from './Home.js';
import Agence from './Agence.js';
import CatalogueFiche from './CatalogueFiche.js';
import NotFoundPage from './NotFoundPage.js';
import AppartementsDashboardPage from './AppartementsDashboardPage';
import AppartementAddPage from './AppartementAddPage';
import EditAppartementPage from './EditAppartementPage';

class AppRouter extends React.Component{
  render(){
    return(

<BrowserRouter>
<div>
<Header/>
<Switch>
  <Route path="/estimation" component={Estimation} />
    <Route exact path="/addAppartement" component={AppartementAddPage} />
        <Route exact path="/editAppartement/:id" component={EditAppartementPage} />
  <Route exact path="/" component={Home} />
  <Route exact path="/catalogue" component={AppartementsDashboardPage} />
    <Route path="/catalogue/:id" component={CatalogueFiche} />
    <Route exact path="/agence" component={Agence} />
    <Route component={NotFoundPage} />
</Switch>
<Footer />
</div>
</BrowserRouter>

    );
  };
}

export default AppRouter;
