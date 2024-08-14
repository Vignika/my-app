import React, { Component } from 'react';
import axios from 'axios';

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/posts', this.state)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
              placeholder="User ID"
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder="Title"
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
              placeholder="Body"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;