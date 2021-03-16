import React, { Component } from 'react'
import './App.css'
import UsersInfo from "./components/UsersInfo"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserPosts from "./components/UserPosts"
import UserPostInfo from "./components/UserPostInfo.js"
class App extends Component {
    // constructor(){
    //     super()

    // }
    render() {
        return ( 
        <div>
            <>
                <Router>
                    <Switch>
                        <Route exact path= "/app/" component = {UsersInfo} />
                        <Route exact path= "/app/user/:id" component = {UserPosts} />
                        <Route exact path= "/app/user/:userid/:postid" component = {UserPostInfo} />
                    </Switch>
                </Router>
                
            </>
        </div>
        )
    }
}

export default App