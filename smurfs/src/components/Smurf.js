import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = ({ error, smurf, deleteSmurf }) => {
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>{smurf.name}</h2>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
          <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default connect(
  state => state,
  { deleteSmurf }
)(Smurf);
