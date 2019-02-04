import React from 'react'
import '../css/pageslider.css'
import '../css/styles.css'
import '../ratchet/css/ratchet.css'
class Header extends React.Component{
    render() {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}>back</a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
}

export default Header;