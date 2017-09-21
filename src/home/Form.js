import React from 'react';
import axios from 'axios';

class Form extends React.Component {

  state = {
    userName: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: form submit', this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(response => {
        this.props.onSubmit(response.data);
        this.setState({userName: ''});
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          onChange={(event) => this.setState({userName: event.target.value})}
          type='text'
          placeholder='GitHub username'/>
        <button type='submit'>Add card</button>
      </form>
    );
  };
}

export default Form;