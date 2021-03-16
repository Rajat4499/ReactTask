import React from "react"
import { Link } from "react-router-dom"
import "../App.css"
import CommentDisplay from "./CommentDisplay"
import AddCommentForm from "./AddCommentForm"
class UserPostInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id : parseInt(props.match.params.userid,10),
            post_id : parseInt(props.match.params.postid,10),
            ShowComments : false,
            isLoading:true,
            AddComment : false,
            postDetails : {},
            comments :[],
            username : ""
            }
        // console.log(this.state.data)
        this.toggleShowComments = this.toggleShowComments.bind(this)
        this.toggleAddComment = this.toggleAddComment.bind(this)
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(response => response.json())
        .then(json =>{
            this.setState({
                isLoading:false,
                comments : json
            })
        } )
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.user_id}`).then(response => response.json())
        .then(json =>{
            this.setState({
                username : json.name
            })
        } )
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.post_id}`).then(response => response.json())
        .then(json =>{
            this.setState({
                postDetails : json
            })
        } )
    }
    toggleShowComments(){
        this.setState(
            (prevState) => {
                return {ShowComments: !prevState.ShowComments}
            }
        )
    }
    toggleAddComment(){
        this.setState(
            (prevState) => {
                return {AddComment: !prevState.AddComment}
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
                <div>
                    <Link to={`/app/user/${this.state.user_id}`} ><button className="Back"> Back </button></Link>
                </div>
                <div className="user-name"> {this.state.username} </div>
                <div>
                    <div className="post-title">{this.state.postDetails.title}</div>
                    <div className="post-body">{this.state.postDetails.body}</div>
                    <div>
                    <button onClick={this.toggleShowComments}>{this.state.ShowComments?"Hide Comments":"Show Comments"}</button>
                        {this.state.ShowComments?this.state.comments.filter(post => post.postId === this.state.post_id).map(comment => {
                            return (
                                        <CommentDisplay comment={comment}/>
                                )
                        }):""
                        }
                    </div>
                    <div className="add-comment center">
                            <AddCommentForm postId ={this.state.post_id}/>
                    </div>
                </div>

            </div>
    )    

    }
}

export default UserPostInfo