import React, {Component} from 'react';
import $ from 'jquery';


export default class Booking extends Component{
    componentDidMount(){
        $('.viewProfile').css({'display':''});
        $('.editProfile').css({'display':'none'});
        $('.editProfileBtn').click(function () {
            $('.viewProfile').css({'display':'none'});
            $('.editProfile').css({'display':''});
        });
    }

    render() {
        return(
            <div id="profile" className="tab-pane fade in active">
                <div className="viewProfile">
                    <article className="image-box style2 box innerstyle personal-details">
                        <figure>
                            <a title="" href=""><img width="270" height="263" alt="" src="http://placehold.it/270x263"/></a>
                        </figure>
                        <div className="details">
                            <button href="" className="button btn-mini pull-right editProfileBtn">EDIT PROFILE</button>
                            <h2 className="box-title fullname">Jessica Brown</h2>
                            <dl className="term-description">
                                <dt>user name:</dt><dd>info@jessica.com</dd>
                                <dt>first name:</dt><dd>jessica</dd>
                                <dt>last name:</dt><dd>brown</dd>
                                <dt>phone number:</dt><dd>1-800-123-HELLO</dd>
                                <dt>Date of birth:</dt><dd>15 August 1985</dd>
                                <dt>Street Address and number:</dt><dd>353 Third floor Avenue</dd>
                                <dt>Town / City:</dt><dd>Paris,France</dd>
                                <dt>ZIP code:</dt><dd>75800-875</dd>
                                <dt>Country:</dt><dd>United States of america</dd>
                            </dl>
                        </div>
                    </article>
                    <hr/>
                    <h2>About You</h2>
                    <div className="intro">
                        <p>Vestibulum tristique, justo eu sollicitudin sagittis, metus dolor eleifend urna, quis scelerisque purus quam nec ligula. Suspendisse iaculis odio odio, ac vehicula nisi faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere semper sem ac aliquet. Duis vel bibendum tellus, eu hendrerit sapien. Proin fringilla, enim vel lobortis viverra, augue orci fringilla diam, sed cursus elit mi vel lacus. Nulla facilisi. Fusce sagittis, magna non vehicula gravida, ante arcu pulvinar arcu, aliquet luctus arcu purus sit amet sem. Mauris blandit odio sed nisi porttitor egestas. Mauris in quam interdum purus vehicula rutrum quis in sem. Integer interdum lectus at nulla dictum luctus. Sed risus felis, posuere id condimentum non, egestas pulvinar enim. Praesent pretium risus eget nisi ullamcorper fermentum. Duis lacinia nisi ac rhoncus vestibulum.</p>
                    </div>
                    <hr/>
                    <h2>Today’s Suggestions</h2>
                    <div className="suggestions image-carousel style2" data-animation="slide" data-item-width="170" data-item-margin="22">
                        <ul className="slides">
                            <li>
                                <a href="" className="hover-effect">
                                    <img src="http://placehold.it/170x170" alt="" />
                                </a>
                                <h5 className="caption">Adventure</h5>
                            </li>
                            <li>
                                <a href="" className="hover-effect">
                                    <img src="http://placehold.it/170x170" alt="" />
                                </a>
                                <h5 className="caption">Beaches &amp; Sun</h5>
                            </li>
                            <li>
                                <a href="" className="hover-effect">
                                    <img src="http://placehold.it/170x170" alt="" />
                                </a>
                                <h5 className="caption">Casinos</h5>
                            </li>
                            <li>
                                <a href="" className="hover-effect">
                                    <img src="http://placehold.it/170x170" alt="" />
                                </a>
                                <h5 className="caption">Family Fun</h5>
                            </li>
                            <li>
                                <a href="" className="hover-effect">
                                    <img src="http://placehold.it/170x170" alt="" />
                                </a>
                                <h5 className="caption">History</h5>
                            </li>
                            <li>
                                <a href="" className="hover-effect">
                                    <img src="http://placehold.it/170x170" alt="" />
                                </a>
                                <h5 className="caption">Adventure</h5>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Benefits of Tavelo Account</h4>
                            <ul className="benefits triangle hover">
                                <li><a href="">Faster bookings with lesser clicks</a></li>
                                <li><a href="">Track travel history &amp; manage bookings</a></li>
                                <li className="active"><a href="">Manage profile &amp; personalize experience</a></li>
                                <li><a href="">Receive alerts &amp; recommendations</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 previous-bookings image-box style14">
                            <h4>Your Previous Bookings</h4>
                            <article className="box">
                                <figure className="no-padding">
                                    <a title="" href="">
                                        <img alt="" src="http://placehold.it/63x59" width="63" height="59"/>
                                    </a>
                                </figure>
                                <div className="details">
                                    <h5 className="box-title"><a href="">Half-Day Island Tour</a><small className="fourty-space"><span className="price">$35</span> Family Package</small></h5>
                                </div>
                            </article>
                            <article className="box">
                                <figure className="no-padding">
                                    <a title="" href="">
                                        <img alt="" src="http://placehold.it/63x59" width="63" height="59"/>
                                    </a>
                                </figure>
                                <div className="details">
                                    <h5 className="box-title"><a href="">Ocean Park Tour</a><small className="fourty-space"><span className="price">$26</span> Per Person</small></h5>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <h4>Need Travelo Help?</h4>
                            <div className="contact-box">
                                <p>We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                                <address className="contact-details">
                                    <span className="contact-phone"><i className="soap-icon-phone"></i> 1-800-123-HELLO</span>
                                    <br/>
                                    <a className="contact-email" href="">help@travelo.com</a>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editProfile">
                    <form className="edit-profile-form">
                        <h2>Personal Details</h2>
                        <div className="col-sm-9 no-padding no-float">
                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>First Name</label>
                                    <input type="text" className="input-text full-width" placeholder=""/>
                                </div>
                                <div className="col-sms-6 col-sm-6">
                                    <label>Last Name</label>
                                    <input type="text" className="input-text full-width" placeholder=""/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>Email Address</label>
                                    <input type="text" className="input-text full-width" placeholder=""/>
                                </div>
                                <div className="col-sms-6 col-sm-6">
                                    <label>Verify Email Address</label>
                                    <input type="text" className="input-text full-width" placeholder=""/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>Country Code</label>
                                    <div className="selector">
                                        <select className="full-width">
                                            <option>United Kingdom (+44)</option>
                                            <option>United States (+1)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sms-6 col-sm-6">
                                    <label>Phone Number</label>
                                    <input type="text" className="input-text full-width" placeholder=""/>
                                </div>
                            </div>
                            <label>Date of Birth</label>
                            <div className="row form-group">
                                <div className="col-sms-4 col-sm-2">
                                    <div className="selector">
                                        <select className="full-width">
                                            <option value="">date</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sms-4 col-sm-2">
                                    <div className="selector">
                                        <select className="full-width">
                                            <option value="">month</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sms-4 col-sm-2">
                                    <div className="selector">
                                        <select className="full-width">
                                            <option value="">year</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Contact Details</h2>
                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>Street Name</label>
                                    <input type="text" className="input-text full-width"/>
                                </div>
                                <div className="col-sms-6 col-sm-6">
                                    <label>Address</label>
                                    <input type="text" className="input-text full-width"/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>City</label>
                                    <div className="selector">
                                        <select className="full-width">
                                            <option value="">Select...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sms-6 col-sm-6">
                                    <label>Country</label>
                                    <div className="selector">
                                        <select className="full-width">
                                            <option value="">Select...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>Region State</label>
                                    <div className="selector">
                                        <select className="full-width">
                                            <option value="">Select...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Upload Profile Photo</h2>
                            <div className="row form-group">
                                <div className="col-sms-12 col-sm-6 no-float">
                                    <div className="fileinput full-width">
                                        <input type="file" className="input-text" data-placeholder="select image/s"/>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Describe Yourself</h2>
                            <div className="form-group">
                                <textarea rows="5" className="input-text full-width" placeholder="please tell us about you"></textarea>
                            </div>
                            <div className="from-group">
                                <button type="submit" className="btn-medium col-sms-6 col-sm-4">UPDATE SETTINGS</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}