import React from 'react'
import '../css/pageslider.css'
import '../css/styles.css'
import '../ratchet/css/ratchet.css'
class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            searchKey:''
        }
        this.searchHandler=this.searchHandler.bind(this);
    }
    searchHandler(event) {
        var searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.searchHandler(searchKey);
    }
    render(){
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" value={this.state.symbol} onChange={this.searchHandler}/>
            </div>

        );
    }
}

export default SearchBar;