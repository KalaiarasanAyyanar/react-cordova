import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import '../css/pageslider.css'
import '../css/styles.css'
import '../ratchet/css/ratchet.css'
class EmployeeList extends React.Component {
    render() {
        var items = this.props.employees.map(function (employee) {
            return (
                <EmployeeListItem key={employee.id} employee={employee} />
            );
        });
        return (
            <ul className="table-view">
                    {items}
            </ul>
        );
    }
}

export default EmployeeList;