import React, { Component } from 'react'
import { Link } from "react-router-dom"
import UserInfoDisplay from "./UserInfoDisplay"
import "../App.css"

export default class UsersInfo extends Component { 
    constructor(){
        super();
        this.state = {
            isLoading: true,
            items : []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
        .then(json =>{
            this.setState({
                isLoading:false,
                items : json
            })
        } )
    }
    render() {
        var {isLoading,items} = this.state;
        if(isLoading){
            return(<h1>Loading...</h1>)
        }
            return (
                items.map( function(userinfo,index) {
                    return(
                        <div className="User-info">
                            <UserInfoDisplay userinfo = {userinfo} />
                            <Link key={userinfo.id} to={`/app/user/${userinfo.id}`} >
                                <div className="user-details"><button className="user-details">Details</button></div>
                            </Link>
                            <br />
                        </div>
                    )
                })
            );
        }
}

