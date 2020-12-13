import React, { Component } from 'react';
import employeeService from './employeeService';

class EmployeeDetails extends Component {

    constructor(){
        super();
        this.state = {
            employee:[]
        }
    }


componentDidMount(){
    employeeService.getEmployeeDetails().then((res)=>
    {
     
            this.setState({employee: res.data});
    }
    );
    
    
}

    render() {
        return (
            <div>
                <h2 className="text-center">Employee Details</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>User Name</th>
                                <th>Email Id</th>
                            </tr>
                        </tbody>
                        <tbody>

                            {
                                this.state.employee.map(
                                    employee =>
                                    <tr key={employee.id}> 
                                    <td>{employee.id}</td>
                                    <td>{employee.username}</td>
                                    <td>{employee.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default EmployeeDetails;