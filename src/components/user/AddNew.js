import React, {Component} from 'react';
import { Link } from "react-router-dom"
import { Redirect } from 'react-router'
import $ from "jquery"

export default class AddNew extends Component{
    constructor(){
        super();
        this.state = {
            id: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        let url = 'http://localhost:5000/api/v1/user/add';
        $.ajax({
            crossDomain: true,
            type     : 'POST',
            url      : url,
            dataType : 'JSON',
            data     : $('#formAddNew').serialize(),
            success  : function (data) {
                alert('Success!')
                console.log(data.data.insertId)
                this.setState({id: data.data.insertId})
            }.bind(this)
        })
    }
    render(){
        if (this.state.id > 0) { // auto redirect page Detail, after success input
            return <Redirect to={'/dashboard/detail/' + this.state.id} />;
        }

        return(
            <React.Fragment>
                <div className="row">
                    <div className="sort-by-section" style={{padding:'0 10px'}}>
                        <h3 className="sort-by-title block-sm skin-color" style={{margin:'14px 20px 0 0',lineHeight:'0px'}}>Add User</h3>
                        <ul className="sort-bar clearfix block-sm">
                            <li style={{padding:'0px',marginRight:'5px'}}><Link className="button btn-small silver" to="/dashboard">Back</Link></li>
                            <li style={{padding:'0px'}}><button className="button btn-small green" onClick={this.handleSubmit}>Save</button></li>
                        </ul>
                    </div>
                </div>
                <div className="row block">
                    <div className="col-sm-9 no-float ">
                        <form id="formAddNew">
                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>Full Name</label>
                                    <input type="text" name="name" className="input-text full-width" placeholder={'Full Name'} />
                                </div>
                                <div className="col-sms-6 col-sm-6">
                                    <label>Gender</label>
                                    <select style={{width:'100%'}} name="gender">
                                        <option >Select</option>
                                        <option value={'Male'}>Male</option>
                                        <option value={'Female'}>Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>Age</label>
                                    <input type="number" max={3} min={0} className="input-text full-width" placeholder={'Age'} name="age" />
                                </div>
                                <div className="col-sms-6 col-sm-6">
                                    <label>Email Address</label>
                                    <input type="email" name="email" className="input-text full-width" placeholder={'Excemple@'} />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-sms-12 col-sm-12">
                                    <label>Title</label>
                                    <textarea name="title" rows="6" className="input-text full-width" placeholder={'write message here'}></textarea>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-sms-6 col-sm-6">
                                    <label>Picture</label>
                                    <div className="fileinput col-sm-6className= no-float no-padding" style={{lineHeight: '34px'}}>
                                        <input type="file" className="input-text" data-placeholder="select image/s"/>
                                        <input type="text" className="custom-fileinput input-text" placeholder="select image/s"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}