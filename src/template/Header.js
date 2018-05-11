import React, {Component} from 'react';

export default class Header extends Component{
        render(){
        return (
            <header id="header" className="navbar-static-top">
                    <a href="#mobile-menu-01" data-toggle="collapse" className="mobile-menu-toggle blue-bg">Mobile Menu Toggle</a>
                    <div className="container">
                        <h1 className="logo navbar-brand">
                            <a href="index.html" title="Travelo - home">
                                <img src={"../../../assets/images/logo2.png"} alt="Travelo HTML5 Template" style={{height:40}} />
                            </a>
                        </h1>
                    </div>
            </header>
        );
    }
}
