import React from 'react';
import ReactDOM form 'react-dom';

const Info = (props)=>{
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

<I

const renderComponent = (wrappedComponent) => {
  return (props)=> (
      <wrappedComponent {...props} />
  );
}


const HOC = renderComponent(Info);


ReactDOM.render()
