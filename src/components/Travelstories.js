import React, {Component} from 'react';

export default class Travelstories extends Component{
    render(){
        return(
            <div id="travel-stories" className="tab-pane fade in active">
                <h2>Share Your Story</h2>
                <div className="col-sm-9 no-float no-padding">
                    <form>
                        <div className="row form-group">
                            <div className="col-sms-6 col-sm-6">
                                <label>Full Name</label>
                                <input type="text" className="input-text full-width" placeholder={'Full Name'} />
                            </div>
                            <div className="col-sms-6 col-sm-6">
                                <label>Gender</label>
                                <select style={{width:'100%'}}>
                                    <option >Select</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sms-6 col-sm-6">
                                <label>Age</label>
                                <input type="number" max={3} min={0} className="input-text full-width" placeholder={'Age'} />
                            </div>
                            <div className="col-sms-6 col-sm-6">
                                <label>Email Address</label>
                                <input type="email" className="input-text full-width" placeholder={'Excemple@'} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Notes</label>
                            <textarea rows="6" className="input-text full-width" placeholder="please tell us about you"></textarea>
                        </div>
                        <hr/>
                            <div className="form-group">
                                <h4>Share with friends <small>(Optional)</small></h4>
                                <p>Share your review with your friends on different social media networks.</p>
                                <ul className="social-icons icon-circle clearfix">
                                    <li className="twitter"><a title="Twitter" href="" data-toggle="tooltip"><i className="soap-icon-twitter"></i></a></li>
                                    <li className="facebook"><a title="Facebook" href="" data-toggle="tooltip"><i className="soap-icon-facebook"></i></a></li>
                                    <li className="googleplus"><a title="GooglePlus" href="" data-toggle="tooltip"><i className="soap-icon-googleplus"></i></a></li>
                                    <li className="pinterest"><a title="Pinterest" href="" data-toggle="tooltip"><i className="soap-icon-pinterest"></i></a></li>
                                </ul>
                            </div>
                            <br/>
                                <div className="form-group col-sm-5 col-md-4 no-float no-padding no-margin">
                                    <button type="submit" className="btn-medium full-width">SUBMIT REVIEW</button>
                                </div>
                    </form>
                </div>
            </div>
        )
    }
}