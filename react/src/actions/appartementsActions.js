import uuid from 'uuid';
import database from '../firebase/firebase';
export const ADD_APPARTEMENT = 'ADD_APPARTEMENT';
export const REMOVE_APPARTMENT = 'REMOVE_APPARTMENT';
export const EDIT_APPARTMENT = 'EDIT_APPARTMENT';
export const SET_APPARTEMENTS = 'SET_APPARTEMENTS';

export const editAppartment = (id, updates) => {
  return(
  {
    type: EDIT_APPARTMENT,
    id,
    updates,
  }
);
}

export const startEditAppartment = (id, updates) => {
  return (dispatch) => {
    return database.ref(`appartements/${id}`).update(updates)
    .then( () => {
      dispatch(editAppartment(id, updates));
    });
  };
};

export const setAppartements = (appartements) =>({
  type: 'SET_APPARTEMENTS',
  appartements,
});

export const startSetAppartements = () => {
  return (dispatch)=>{
     return database.ref('appartements').once('value')
  .then((snapshot)=>{
  const appartements = [];
     snapshot.forEach((snapshotChild)=>{
       appartements.push({
         id: snapshotChild.key,
         ...snapshotChild.val(),
       });
     });
     dispatch(setAppartements(appartements));
  });
};
};



export const addAppartement = (appart) => ({
    type: ADD_APPARTEMENT,
    appart
  });

export const startAddAppartement = (appartementData = {}) => {
  return (dispatch) => {
    const {
      genre = '',
      superficie = 0,
      quartier = '',
      prix = 0,
    } = appartementData;

    const appartement = { genre, superficie, quartier, prix };
    database.ref('appartements').push(appartement)
    .then((ref)=>{
      dispatch(addAppartement({
        id: ref.key,
        ...appartement
    }));
  });
}};

export const removeAppartment = ({id}) => {
  return{
    type: REMOVE_APPARTMENT,
    id,
  }
};


export const startRemoveAppartment = ({id} = {}) => {
  return (dispatch) => {
    return database.ref(`appartements/${id}`).remove()
    .then(
      () => { dispatch(removeAppartment({id}));
            });
   }
}
