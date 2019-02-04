import React from 'react';
import ReactDOM from 'react-dom'
import PageSlider from '../src/js/pageslider-react'
import  router  from '../src/js/router'
import HomePage from './Components/HomePage'
import EmployeePage from './Components/EmployeePage'
import employeeService from './Components/EmployeeService'
import './css/pageslider.css'
import './css/styles.css'
import './ratchet/css/ratchet.css'
var createReactClass = require('create-react-class')


var App = createReactClass({
    mixins: [PageSlider],
    getInitialState: function() {
        return {
            searchKey: '',
            employees: []
        }
    },
    searchHandler: function(searchKey) {
        employeeService.findByName(searchKey).done(function(employees) {
            this.setState({
                searchKey:searchKey,
                employees: employees,
                pages: [<HomePage key="list" searchHandler={this.searchHandler} searchKey={searchKey} employees={employees}/>]});
        }.bind(this));
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="list" searchHandler={this.searchHandler} searchKey={this.state.searchKey} employees={this.state.employees}/>);
        }.bind(this));
        router.addRoute('employees/:id', function(id) {
            console.log("render employee")
            this.slidePage(<EmployeePage key="details" employeeId={id-1} service={employeeService}/>);
        }.bind(this));
        router.start();
    }
});


ReactDOM.render(<App/>, document.body);