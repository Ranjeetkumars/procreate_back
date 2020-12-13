import axios  from 'axios';

const EMPLOYEE_DETAILS = "https://jsonplaceholder.typicode.com/users";

class employeeService {


    getEmployeeDetails() {
        console.log('inside employeeService, getEmployeeDetails method is executed');
        return axios.get(EMPLOYEE_DETAILS);
    }
}
export default  new employeeService();