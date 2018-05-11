import React, {Component} from 'react';
import { Route} from "react-router-dom";

import ListUser from './user/List'
import AddNew from './user/AddNew'
import Detail from './user/Detail'
import Edit from './user/Edit'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(){
        this.state.list.push({name:'Siko Mauday',country:'Indonesia'});
        this.setState(this.state)
    }

    render(){

        return(
            <div id="dashboard" className="tab-pane fade in active">
                <h1 className="no-margin skin-color">Hi Jessica, Welcome to Travelo!</h1>
                <p>All your trips booked with us will appear here and you’ll be able to manage everything!</p>
                <br />
                <div className="row block">
                    <div className="col-sm-6 col-md-3">
                        <a href="hotel-list-view.html">
                            <div className="fact blue">
                                <div className="numbers counters-box">
                                    <dl>
                                        <dt className="display-counter" data-value="3200">0</dt>
                                        <dd>Hotels to Stay</dd>
                                    </dl>
                                    <i className="icon soap-icon-hotel"></i>
                                </div>
                                <div className="description">
                                    <i className="icon soap-icon-longarrow-right"></i>
                                    <span>View Hotels</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="flight-list-view.html">
                            <div className="fact yellow">
                                <div className="numbers counters-box">
                                    <dl>
                                        <dt className="display-counter" data-value="4509">0</dt>
                                        <dd>Airlines to Travel</dd>
                                    </dl>
                                    <i className="icon soap-icon-plane"></i>
                                </div>
                                <div className="description">
                                    <i className="icon soap-icon-longarrow-right"></i>
                                    <span>View Flights</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="car-list-view.html">
                            <div className="fact red">
                                <div className="numbers counters-box">
                                    <dl>
                                        <dt className="display-counter" data-value="3250">0</dt>
                                        <dd>VIP Transports</dd>
                                    </dl>
                                    <i className="icon soap-icon-car"></i>
                                </div>
                                <div className="description">
                                    <i className="icon soap-icon-longarrow-right"></i>
                                    <span>View Cars</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="cruise-list-view.html">
                            <div className="fact green">
                                <div className="numbers counters-box">
                                    <dl>
                                        <dt className="display-counter" data-value="1570">0</dt>
                                        <dd>Celebrity Cruises</dd>
                                    </dl>
                                    <i className="icon soap-icon-cruise flip-effect"></i>
                                </div>
                                <div className="description">
                                    <i className="icon soap-icon-longarrow-right"></i>
                                    <span>View Cruises</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <hr/>

                <Route path={`${this.props.match.url}/addNew`} component={AddNew}/>
                <Route path={`${this.props.match.url}/detail/:id`} component={Detail} />
                <Route path={`${this.props.match.url}/edit/:id`} component={Edit} />
                <Route exact path={this.props.match.url} component={ListUser} />
                <hr/>

            </div>
        );
    }
}