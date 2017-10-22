import React from 'react';
import { Link } from 'react-router-dom';

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        Admin
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    );
  }
}
