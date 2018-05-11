import React, {Component} from 'react'
import { Link } from "react-router-dom"
import $ from "jquery";

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            list : []
        };
        this.viewList = this.viewList.bind(this)
    }

    componentDidMount(){
        this.viewList();
    }

    viewList(){
        var url = 'http://localhost:5000/api/v1/user/list';
        $.ajax({
            crossDomain: true,
            type: "GET",
            cache: false,
            dataType: 'json',
            url: url,
            success: function (data) {
                this.setState({list: data.data})
            }.bind(this)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="sort-by-section" style={{padding:'0 10px'}}>
                        <h3 className="sort-by-title block-sm skin-color" style={{margin:'14px 20px 0 0',lineHeight:'0px'}}>List Data</h3>
                        <ul className="sort-bar clearfix block-sm">
                            <li style={{padding:'0px'}}><Link className="button btn-small dark-orange" to="dashboard/addNew">Add New</Link></li>
                            <li style={{paddingTop:'0',paddingBottom:"0"}}>
                                <p style={{margin:'0',lineHeight:'1.2',marginLeft:'14px'}}>
                                    <span className={"green-color"}>- Male </span><br/>
                                    <span className={"blue-color"}>- Female </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    {this.state.list.map(function(e, i){
                        let bg = 'green-bg';
                        if(e.gender === 'Female'){
                            bg = 'blue-bg';
                        }
                        return <div className="col-sm-3 col-md-3" key={i}>
                            <article>
                                <Link to={'dashboard/detail/' + e.id}>
                                    <div className="icon-box style1 gray-bg">
                                        <i className={"soap-icon-user " + bg}></i>
                                        <span className="box-title">{e.name}</span>
                                        {/*<small>{e.country}</small>*/}
                                    </div>
                                </Link>
                            </article>
                        </div>
                    })}
                </div>
            </React.Fragment>
        );
    }
}