import React, { Component } from 'react';
class EmployeeRegistration extends Component {
	render() {
  	return (
    	<div>
          <form>
      <span className="formtext">&#x3C;Form /&#x3E;</span>
    	  <input 
          type="text" 
          placeholder="Enter Company Name" 
          required 
        />
        <button>Go!</button>
    	</form>
        </div>
    );
  }	
}
export default EmployeeRegistration;