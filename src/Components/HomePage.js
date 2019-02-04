import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import '../css/pageslider.css'
import '../css/styles.css'
import '../ratchet/css/ratchet.css'
class HomePage extends React.Component{
    render() {
        return (
            <div className={"page " + this.props.position}>
                <Header text="Employee Directory" back="false"/>
                <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler}/>
                <div className="content">
                    <EmployeeList employees={this.props.employees}/>
                </div>
            </div>
        );
    }
}

export default HomePage;