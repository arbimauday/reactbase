import React, {Component} from 'react';
//import $ from "jquery";

export default class Booking extends Component{
    constructor(props){
        super(props);
        this.state = {checked:'checked'};
    }

    render(){
        return(
            <div id="booking" className="tab-pane fade in active">
                <h2>Trips You have Booked!</h2>
                <div className="filter-section gray-area clearfix">
                    <form>
                        <label className="radio radio-inline">
                            <input type="radio" defaultChecked={this.state.checked} name="filter" />
                            All Types
                        </label>
                        <label className="radio radio-inline">
                            <input type="radio" name="filter" />
                            Hotels
                        </label>
                        <label className="radio radio-inline">
                            <input type="radio" name="filter" />
                            Flights
                        </label>
                        <label className="radio radio-inline">
                            <input type="radio" name="filter" />
                            Cars
                        </label>
                        <label className="radio radio-inline">
                            <input type="radio" name="filter" />
                            Cruises
                        </label>
                        <label className="radio-inline">
                            <input type="button" name="filter" value="Add New" className="btn btn-danger btn-sm" />
                            {/*<button className="btn btn-danger status">Add New</button>*/}
                            {/*<button class="btn-mini status">UPCOMMING</button>*/}
                        </label>
                        <div className="pull-right col-md-6 action" style={{marginBottom:'3px'}}>
                            {/*<h5 className="pull-left no-margin col-md-4">Sort results by:</h5>*/}
                            <div className="datepicker-wrap  blue datepickerView">
                                <input type="text" readOnly className="input-text full-width hasDatepicker" style={{background:'#dedede'}} placeholder="mm/dd/yy" id="dp1518161609601"/>
                                <img className="ui-datepicker-trigger" src="./assets/images/icon/blank.png" alt="" />
                            </div>
                            {/*<button className="btn-small white gray-color">UPCOMING</button>*/}
                            {/*<button className="btn-small white gray-color">CANCELLED</button>*/}
                        </div>
                    </form>
                </div>
                <div className="booking-history">
                    <div className="booking-info clearfix">
                        <div className="date">
                            <label className="month">NOV</label>
                            <label className="date">23</label>
                            <label className="day">SAT</label>
                        </div>
                        <h4 className="box-title"><i className="icon soap-icon-plane-right takeoff-effect yellow-color circle"></i>Indianapolis to Paris<small>you are flying</small></h4>
                        <dl className="info">
                            <dt>TRIP ID</dt>
                            <dd>5754-8dk8-8ee</dd>
                            <dt>booked on</dt>
                            <dd>saturday, nov 23, 2013</dd>
                        </dl>
                        <button className="btn-mini status">UPCOMMING</button>
                    </div>
                    <div className="booking-info clearfix">
                        <div className="date">
                            <label className="month">NOV</label>
                            <label className="date">30</label>
                            <label className="day">SAT</label>
                        </div>
                        <h4 className="box-title"><i className="icon soap-icon-plane-right takeoff-effect yellow-color circle"></i>England to Rome<small>you are flying</small></h4>
                        <dl className="info">
                            <dt>TRIP ID</dt>
                            <dd>5754-8dk8-8ee</dd>
                            <dt>booked on</dt>
                            <dd>saturday, nov 30, 2013</dd>
                        </dl>
                        <button className="btn-mini status">UPCOMMING</button>
                    </div>
                    <div className="booking-info clearfix">
                        <div className="date">
                            <label className="month">DEC</label>
                            <label className="date">11</label>
                            <label className="day">MON</label>
                        </div>
                        <h4 className="box-title"><i className="icon soap-icon-hotel blue-color circle"></i>Hilton Hotel &amp; Resorts<small>2 adults staying</small></h4>
                        <dl className="info">
                            <dt>TRIP ID</dt>
                            <dd>5754-8dk8-8ee</dd>
                            <dt>booked on</dt>
                            <dd>monday, dec 11, 2013</dd>
                        </dl>
                        <button className="btn-mini status">UPCOMMING</button>
                    </div>
                    <div className="booking-info clearfix">
                        <div className="date">
                            <label className="month">DEC</label>
                            <label className="date">18</label>
                            <label className="day">THU</label>
                        </div>
                        <h4 className="box-title"><i className="icon soap-icon-car red-color circle"></i>Economy Car<small>you are driving</small></h4>
                        <dl className="info">
                            <dt>TRIP ID</dt>
                            <dd>5754-8dk8-8ee</dd>
                            <dt>booked on</dt>
                            <dd>thursday, dec 18, 2013</dd>
                        </dl>
                        <button className="btn-mini status">UPCOMMING</button>
                    </div>
                    <div className="booking-info clearfix">
                        <div className="date">
                            <label className="month">DEC</label>
                            <label className="date">22</label>
                            <label className="day">SUN</label>
                        </div>
                        <h4 className="box-title"><i className="icon soap-icon-cruise green-color circle"></i>Baja Mexico<small>3 adults going on cruise</small></h4>
                        <dl className="info">
                            <dt>TRIP ID</dt>
                            <dd>5754-8dk8-8ee</dd>
                            <dt>booked on</dt>
                            <dd>sunday, dec 22, 2013</dd>
                        </dl>
                        <button className="btn-mini status">UPCOMMING</button>
                    </div>
                    <div className="booking-info clearfix cancelled">
                        <div className="date">
                            <label className="month">NOV</label>
                            <label className="date">30</label>
                            <label className="day">SAT</label>
                        </div>
                        <h4 className="box-title"><i className="icon soap-icon-plane-right takeoff-effect circle"></i>England to Rome<small>you are flying</small></h4>
                        <dl className="info">
                            <dt>TRIP ID</dt>
                            <dd>5754-8dk8-8ee</dd>
                            <dt>booked on</dt>
                            <dd>saturday, nov 30, 2013</dd>
                        </dl>
                        <button className="btn-mini status">CANCELLED</button>
                    </div>
                    <div className="booking-info clearfix cancelled">
                        <div className="date">
                            <label className="month">DEC</label>
                            <label className="date">18</label>
                            <label className="day">THU</label>
                        </div>
                        <h4 className="box-title"><i className="icon soap-icon-car circle"></i>Economy Car<small>you are driving</small></h4>
                        <dl className="info">
                            <dt>TRIP ID</dt>
                            <dd>5754-8dk8-8ee</dd>
                            <dt>booked on</dt>
                            <dd>thursday, dec 18, 2013</dd>
                        </dl>
                        <button className="btn-mini status">CANCELLED</button>
                    </div>
                </div>
            </div>
        );
    }
}