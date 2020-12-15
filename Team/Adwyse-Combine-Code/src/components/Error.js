import React from "react";
import { Link } from 'react-router-dom';

const Error = () =>{
  return (
    <div>
      <h2>Oops - Not Found!</h2>
      <p>We are sorry but the page you are looking for does not exist.</p>
      <Link to="/">
        Go Home
      </Link>
    </div>
  ) 
};

export default Error;