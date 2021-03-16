import React from "react"
import { Link } from "react-router-dom"
import "../App.css"
import PostForm from './PostForm'

class UserPosts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_id : parseInt(props.match.params.id,10),
            username : "",
            isLoading: true,
            items : []
        }
        this.handleDelete= this.handleDelete.bind(this)
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json())
        .then(json =>{
            this.setState({
                isLoading:false,
                items : json
            })
        } )
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.user_id}`).then(response => response.json())
        .then(json =>{
            this.setState({
                username : json.name
            })
        } )
    }
    handleDelete(event){
        const id = event.target.id;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:"POST"
        }).then(response => {
            console.log(response,id);
        }).then(
            error => {
                console.log(error);
            }
        )
    }
    render(){
        var {isLoading,items} = this.state;
        if(isLoading){
            return(<h1>Loading...</h1>)
        }
        return(
            <div className="User-Description">
                <div className="add-post">
                    <PostForm user_id = {this.state.user_id}/>
                </div>
                <div className="back">
                    <Link to='/app'><button className="Back"> Back </button></Link>
                </div>

                <div className="user-name"> {this.state.username} </div><br />
                <div className="user-posts">
                    {items.filter(users => users.userId === this.state.user_id).map(userPost => (
                        <>
                        <div className="delete"><button id={userPost.id} onClick={this.handleDelete}>Delete</button></div>
                        <div className="post-title-link">
                            <Link to={
                                {
                                    pathname : `/app/user/${this.state.user_id}/${userPost.id}`,
                                }
                            }>
                            <button className="post-title-link">{userPost.title}</button>
                            </Link></div>
                        </>
                    ))}
                </div>

        </div>
        )
    }
}

export default UserPosts