import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = ({ error, smurf, deleteSmurf }) => {
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className='smurf'>
          <h2 className='smurf__header'>{smurf.name}</h2>
          <p className='smurf__details'>Age: {smurf.age}</p>
          <p className='smurf__details'>Height: {smurf.height}cm</p>
          <button
            className='button button--remove'
            onClick={() => deleteSmurf(smurf.id)}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default connect(
  state => state,
  { deleteSmurf }
)(Smurf);
