import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Selector from './Selector';

export default () => {
  return (
    <div className="header">
      <div className="header-name">
        <Link to="/">Dawei Feng</Link>
      </div>
      <div className="header-selectors">
        <Selector expand={false} name={'Journey'} />
      </div>
    </div>
  );
};
