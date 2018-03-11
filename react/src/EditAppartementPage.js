import React from 'react';
import AppartementForm from './AppartementForm';
import { connect } from 'react-redux';
import { startEditAppartment, startRemoveAppartment } from './actions/appartementsActions';


const EditAppartementPage = (props)=> {

  return(
  <div>
    <AppartementForm
    appartement = {props.appartement}
    onSubmit={(appartement)=>{
        props.dispatch(startEditAppartment(props.appartement.id, appartement));
        props.history.push('/catalogue');
      }
    }
  />
 <button onClick={()=>{props.dispatch(startRemoveAppartment(props.appartement));
    props.history.push('/catalogue');
 }}>Supprimer</button>
  </div>
);
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditAppartementPage);
