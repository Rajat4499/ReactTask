import "../App.css"
import React, { Component } from 'react'
import Modal from './Modal'

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            title : "",
            body : "",
            userId : props.user_id,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
      };

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]:value})
        console.log(this.state);        
    }
    
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method : 'POST',
            body : JSON.stringify(
                {
                    userId: parseInt(this.state.userId,10),
                    title : this.state.title,
                    body: this.state.body
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            console.log(response)
            this.hideModal()
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <form onSubmit ={this.handleSubmit} >
                    <div className="form-post">
                        <label for="name">Title : </label>
                            <input type="text" name="title" placeholder="Enter Title" onChange={this.handleChange} value = {this.state.title} /><br /><br />
                        <label for="name">Body : </label>
                            <input type="text" name="body" placeholder="Enter Body" onChange={this.handleChange} value = {this.state.body} /><br /><br />
                        <button type="submit" className="add-post"> Add Post </button>
                    </div>
                </form>
            </Modal>
            <button style={{float : 'right' }} onClick={this.showModal} > Add Post</button><br />

            </div>
        )
    }
}

export default PostForm
