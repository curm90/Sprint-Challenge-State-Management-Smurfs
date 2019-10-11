import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import { fetchSmurfData } from '../actions';

import './App.css';

function App({ fetchSmurfData }) {
  useEffect(() => {
    fetchSmurfData();
  }, [fetchSmurfData]);

  return (
    <div className='App'>
      <Header />
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default connect(
  state => state,
  { fetchSmurfData }
)(App);
