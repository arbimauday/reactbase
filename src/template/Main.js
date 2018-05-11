import React, {Component} from 'react';
import '../headStyling';
import '../inbodyStyling';

import Header from 'src/template/Header';
import SiderBar from 'src/template/SideBar';
import Footer from 'src/template/Footer';

export default class Main extends Component{
    render(){
        return (
            <div id="page-wrapper">
                <Header/>
                <SiderBar/>
                <Footer />
            </div>
        )
    }
}