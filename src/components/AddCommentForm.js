import React, { Component } from 'react'
import Modal from './Modal'

class AddCommentForm extends Component {
    constructor(props) {
        super(props);
          this.state = {
            show: false,
            name : "",
            email : "",
            body : "",
            postId : parseInt(props.postId,10),
          };
          this.showModal = this.showModal.bind(this);
          this.hideModal = this.hideModal.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this)
        }
      
        showModal = () => {
          this.setState({ show: true });
        };
      
        hideModal = () => {
          this.setState({ show: false });
        };
        handleChange(event){
            const {name, value} = event.target
            this.setState({[name] : value})
            console.log(this.state);
        };
        handleSubmit(event){
            event.preventDefault();
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}/comments`,{
                method : 'POST',
                body : JSON.stringify({
                    postId : this.state.postId,
                    name : this.state.name,
                    email : this.state.email,
                    body : this.state.body
                })
            }).then(response => {
                console.log("Response",response);
                this.hideModal()
            }).then(
                error => {
                    console.log(error);
                }
            )
        }
        render() {
            return (
              <div >
                <Modal show={this.state.show} handleClose={this.hideModal}>
                        <form onSubmit ={this.handleSubmit}>
                            <div className="form-comment">
                                <label for="name">Name : </label>
                                    <input type="text" name="name" placeholder="Enter Name" onChange={this.handleChange} value={this.state.name} /><br /><br />
                                <label for="name">Email : </label>
                                    <input type="text" name="email" placeholder="Enter Email" onChange={this.handleChange} value={this.state.email} /><br /><br />
                                <label for="name">Body : </label>
                                    <input type="text" name="body" placeholder="Enter Comment" onChange={this.handleChange} value={this.state.body} /><br /><br />
                                <button className="add-comment"> Add Comment </button>
                            </div>
                        </form>
                </Modal>
                <button style={{float : 'right' }} onClick={this.showModal} > Add Comment</button><br />
              </div>
            );
        }
}

export default AddCommentForm
