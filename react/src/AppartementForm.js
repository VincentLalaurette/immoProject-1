import React from 'react';
import { removeAppartment } from './actions/appartementsActions';
import { connect } from 'react-redux';

class AppartementForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      genre: props.appartement ? props.appartement.genre : 'appartement',
      superficie: props.appartement ? props.appartement.superficie : '',
      prix: props.appartement ? props.appartement.prix.toString()  : '',
      quartier: props.appartement ? props.appartement.quartier : '',
      id: props.appartement ? props.appartement.id : '',
      error: '',
  }
}

onQuartierChange = e => {
  const quartier = e.target.value;
this.setState(()=>({
  quartier
}));
}
onSuperficieChange = e => {
  const superficie=e.target.value;
  this.setState(()=>({
    superficie
  }));
}

onGenreChange = e => {
  const genre = e.target.value;
  this.setState(() => ({
    genre
  }));
}

onPrixChange = e => {
  const prix = e.target.value;
  if(!prix || prix.match(/^\d{1,}(\.\d{0,2})?$/))
  {
    this.setState(()=>{
      return(
        {prix});
    })
  }
}

onSubmit = e => {
  e.preventDefault();
if(!this.state.quartier || !this.state.prix || !this.state.superficie){
  this.setState(()=>({
    error: 'il faut tout remplir'
  }))
}else{
  this.setState(()=>({
    error: '',
  }));
  this.props.onSubmit({
    quartier: this.state.quartier,
    prix: parseFloat(this.state.prix, 10),
    superficie: this.state.superficie,
    genre: this.state.genre,
  });
}

}
render(){

  return(

    <form
    onSubmit={e=>{this.onSubmit(e)}}
      className="appartAddForm"
      >
 <h2>{this.props.appartement?'Editer' : 'Créer'}</h2>
       <p>Quartier : <input name="quartier"
       value={this.state.quartier}
       onChange={e=>{this.onQuartierChange(e)}}
        type="text" /></p>
    <select name="genre"
    onChange={e=>{this.onGenreChange(e)}}
    value={this.state.genre}>
      <option>appartement</option>
       <option>maison </option>
        <option>terrain</option>
    </select>
    <p>Superficie : <input name="superficie" value={this.state.superficie}
    onChange={e=>{this.onSuperficieChange(e)}}
    type="number" /></p>
    <p>Prix :   <input name="prix"
    value={this.state.prix}
    onChange={e=>{this.onPrixChange(e)}}
    type="text" /></p>
       <p><button type="submit">
       {this.props.appartement?'Modifier':'Ajouter'}</button></p>
       {this.state.error && <p>{this.state.error}</p>}
    </form>
  );
}
}

export default AppartementForm;
