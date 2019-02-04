import React from 'react'
import Header from './Header'
import '../css/pageslider.css'
import '../css/styles.css'
import '../ratchet/css/ratchet.css'
class EmployeePage extends React.Component{
    constructor(){
        super();
        this.state={
            employee:{}
        }
    }
    componentDidMount(){
        this.props.service.findById(this.props.employeeId).done(function(result) {
            this.setState({employee: result});
        }.bind(this));
    }
    render(){
        return (
            <div className={"page " + this.props.position}>
                <Header text="Employee" back="true"/>
                <div className="card">
                    <ul className="table-view">
                        <li className="table-view-cell media">
                            <img className="media-object big pull-left" src={"../pics/" + this.props.service.employees[this.props.employeeId].firstName + "_" + this.props.service.employees[this.props.employeeId].lastName + ".jpg" } alt=''/>
                            <h1>{this.props.service.employees[this.props.employeeId].firstName} {this.props.service.employees[this.props.employeeId].lastName}</h1>
                            <p>{this.props.service.employees[this.props.employeeId].title}</p>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"tel:" + this.props.service.employees[this.props.employeeId].officePhone} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                Call Office
                                    <p>{this.props.service.employees[this.props.employeeId].officePhone}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"tel:" + this.props.service.employees[this.props.employeeId].mobilePhone} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                Call Mobile
                                    <p>{this.props.service.employees[this.props.employeeId].mobilePhone}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"sms:" + this.props.service.employees[this.props.employeeId].mobilePhone} className="push-right">
                                <span className="media-object pull-left icon icon-sms"></span>
                                <div className="media-body">
                                SMS
                                    <p>{this.props.service.employees[this.props.employeeId].mobilePhone}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"mailto:" + this.props.service.employees[this.props.employeeId].email} className="push-right">
                                <span className="media-object pull-left icon icon-email"></span>
                                <div className="media-body">
                                Email
                                    <p>{this.props.service.employees[this.props.employeeId].email}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default EmployeePage