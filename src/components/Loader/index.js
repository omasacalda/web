import React from 'react';

import { loader } from '../../assets/images';


const Loader = ({ loading }) => {
  if (!loading) {
    return null
  }

  return (
    <div className="loader-full-page">
      <img className="loader" src={loader} alt="loader" />
    </div>
  )
};

export default Loader;
