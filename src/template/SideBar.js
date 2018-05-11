import React, {Component} from 'react';
import {Route, Link } from "react-router-dom"; // default (Router, Route, Link), we just use Route and Link
//import $ from 'jquery';

import Dashboard from '../components/Dashboard';
import Profile   from '../components/Profile';
import Booking from '../components/Booking';
import Travelstories from '../components/Travelstories';



export default class SideBar extends Component{
    componentDidUpdate(){
    }

    render(){
        return (
            <section id="content" style={{paddingTop:15}}>
                <div className="container">
                    <div className="tab-container full-width-style arrow-left dashboard">
                        <ul className="tabs">
                            <li className="active"><Link data-toggle="tab" to="/dashboard"><i className="soap-icon-anchor circle"></i>Dashboard</Link></li>
                            <li className=""><Link data-toggle="tab" to="/profile"><i className="soap-icon-user circle"></i>Profile</Link></li>
                            <li className=""><Link data-toggle="tab" to="/booking"><i className="soap-icon-businessbag circle"></i>Booking</Link></li>
                            <li className=""><Link data-toggle="tab" to="/wishlist"><i className="soap-icon-wishlist circle"></i>Wishlist</Link></li>
                            <li className=""><Link data-toggle="tab" to="/travel-stories"><i className="soap-icon-conference circle"></i>Travel Stories</Link></li>
                            <li className=""><Link data-toggle="tab" to="/settings"><i className="soap-icon-settings circle"></i>Settings</Link></li>
                        </ul>
                        <div className="tab-content" style={{minHeight:'700px'}}>
                            <Route path="/dashboard" name="" component={Dashboard} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/booking" component={Booking} />
                            <Route path="/travel-stories" component={Travelstories} />
                            <Route exact path="/" component={Dashboard} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}