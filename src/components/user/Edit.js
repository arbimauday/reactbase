import React, {Component} from 'react';
import { Link } from "react-router-dom"
import { Redirect } from 'react-router'
import $ from "jquery"

export default class AddNew extends Component{
    constructor(){
        super();
        this.state = {
            detail : [],
            idUrl: 0,
            selected: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount(){
        var url = 'http://localhost:5000/api/v1/user/'+this.props.match.params.id;
        $.ajax({
            crossDomain: true,
            type: "GET",
            cache: false,
            dataType: 'json',
            url: url,
            success: function (data) {
                this.setState({detail: data.data})

                var gender= data.data[0].gender;
                if(!gender){
                    gender = 'empty';
                }
                $("select option[value="+gender+"]").attr("selected","selected");
            }.bind(this)
        })
    }

    handleSubmit(id){
        var urlupdate = 'http://localhost:5000/api/v1/user/update/'+id;

        $.ajax({
            crossDomain: true,
            type     : 'GET',
            url      : urlupdate,
            cache: false,
            dataType : 'JSON',
            data     : $('#formUpdate').serialize(),
            success  : function (data) {
                alert('Success!')
                this.setState({idUrl: id})
            }.bind(this)
        })
    }
    render(){
        if (this.state.idUrl > 0) { // auto redirect page Detail, after success input
            return <Redirect to={'/dashboard/detail/' + this.state.idUrl} />;
        }

        return(
            <React.Fragment>
                <div className="row">
                    <div className="sort-by-section" style={{padding:'0 10px'}}>
                        <h3 className="sort-by-title block-sm skin-color" style={{margin:'14px 20px 0 0',lineHeight:'0px'}}>Edit</h3>
                        <ul className="sort-bar clearfix block-sm">
                            <li style={{padding:'0px',marginRight:'5px'}}><Link className="button btn-small silver" to={'/dashboard/detail/' + this.props.match.params.id}>Cancel</Link></li>
                            <li style={{padding:'0px'}}><button className="button btn-small green" onClick={()=>{this.handleSubmit(this.props.match.params.id)}}>Save</button></li>
                        </ul>
                    </div>
                </div>
                <div className="row block">
                    <div className="col-sm-9 no-float ">
                        {this.state.detail.map(function(e) {
                            return (
                                <form id="formUpdate" key={e}>
                                    <div className="row form-group">
                                        <div className="col-sms-6 col-sm-6">
                                            <label>Full Name</label>
                                            <input type="text" name="name" className="input-text full-width" defaultValue={e.name} placeholder={'Full Name'} />
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
                                            <input type="number" max={3} min={0} className="input-text full-width" defaultValue={e.age} placeholder={'Age'} name="age" />
                                        </div>
                                        <div className="col-sms-6 col-sm-6">
                                            <label>Email Address</label>
                                            <input type="email" name="email" className="input-text full-width" defaultValue={e.email} placeholder={'Excemple@'} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-sms-12 col-sm-12">
                                            <label>Title</label>
                                            <textarea name="title" rows="6" className="input-text full-width" defaultValue={e.title} placeholder="write message here"/>
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
                            )
                        })}

                    </div>
                </div>
            </React.Fragment>
        );
    }
}