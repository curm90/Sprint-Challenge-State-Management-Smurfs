import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = ({ smurfsData, isFetching }) => {
  return (
    <div className='smurf-container'>
      {isFetching && <p>Loading...</p>}
      {smurfsData.map(smurf => (
        <Smurf key={smurf.name} smurf={smurf} />
      ))}
    </div>
  );
};

export default connect(state => state)(SmurfList);
