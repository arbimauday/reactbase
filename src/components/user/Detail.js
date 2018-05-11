import React,{Component} from 'react'
import { Link } from "react-router-dom"
import $ from "jquery"

export default class Detail extends Component{

    constructor(){
        super();
        this.state = {
            detail : []
        };
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
            }.bind(this)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="sort-by-section col-sm-9" style={{padding:'0 10px'}}>
                        <h3 className="sort-by-title block-sm skin-color" style={{margin:'14px 20px 0 0',lineHeight:'0px'}}>Detail</h3>
                        <ul className="sort-bar clearfix block-sm">
                            <li style={{padding:'0px',marginRight:'5px'}}><Link className="button btn-small silver" to="/dashboard">Back</Link></li>
                            <li style={{padding:'0px'}}><Link className="button btn-small green" to={'/dashboard/edit/'+ this.props.match.params.id}>Edit</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row block">
                    <div className="col-sm-9 no-float ">
                        {this.state.detail.map(function(e){
                            return(
                                <article className="image-box style2 box innerstyle personal-details"  key={e}>
                                    <figure style={{width:'200px'}}>
                                        <a title="" href=""><img width="270" height="263" alt="" src="http://placehold.it/270x263"/></a>
                                    </figure>
                                    <div className="details" style={{padding:'5px 20px 10px 210px'}}>
                                        <h2 className="box-title fullname">{e.name}</h2>
                                        <div className="term-description">
                                            <ul>
                                                <li style={{borderBottom:'1px solid #f5f5f5'}}>
                                                    <h5 className="box-title" style={{margin:'5px 0'}}>
                                                        <small style={{marginBottom:'2px'}}>Gender</small> {e.gender}
                                                    </h5>
                                                </li>
                                                <li style={{borderBottom:'1px solid #f5f5f5'}}>
                                                    <h5 className="box-title" style={{margin:'5px 0'}}>
                                                        <small style={{marginBottom:'2px'}}>Age</small> {e.age} Years
                                                    </h5>
                                                </li>
                                                <li style={{borderBottom:'1px solid #f5f5f5'}}>
                                                    <h5 className="box-title" style={{margin:'5px 0'}}>
                                                        <small style={{marginBottom:'2px'}}>Email</small> {e.email}
                                                    </h5>
                                                </li>
                                                <li style={{borderBottom:'1px solid #f5f5f5'}}>
                                                    <h5 className="box-title" style={{margin:'5px 0'}}>
                                                        <small style={{marginBottom:'2px'}}>Title</small> {e.title}
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}