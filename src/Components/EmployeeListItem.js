import React from 'react'
import '../css/pageslider.css'
import '../css/styles.css'
import '../ratchet/css/ratchet.css'
class EmployeeListItem extends React.Component{
    render() {
        return (
            <li className="table-view-cell media">
                <a href={"#employees/" + this.props.employee.id}>
                    <img className="media-object small pull-left" src={"../pics/" + this.props.employee.firstName + "_" + this.props.employee.lastName + ".jpg" } alt=''/>
                    {this.props.employee.firstName} {this.props.employee.lastName}
                    <p>{this.props.employee.title}</p>
                </a>
            </li>
        );
    }
}

export default EmployeeListItem;