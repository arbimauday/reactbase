import React, { Component } from 'react';
import $ from 'jquery'; // call a function jquery for can use in JSX
import {BrowserRouter} from 'react-router-dom'; // // default (Router, Route, Link), we just use Router

/* The List All Componnet */
import Header from './template/Header'; // Header Template
import SideBar from './template/SideBar'; // Siebar with Content
import Footer from './template/Footer'; // Footer Template
//var db = require('./db/Connect');
//import './db/Connect';


class App extends Component {

    componentDidMount() { // this is a component default react js
        $('.tabs li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            //var link = '#'+ $(this).find('a').attr('href');
            //var comper = link.slice(1); //for delete caracter '#'

            //$(link).addClass('in active').siblings().removeClass('in active');
        });
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                <div id="page-wrapper">
                    <Header/>
                    <SideBar/>
                    <Footer />
                </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;