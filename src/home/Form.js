import React from 'react';

class Form extends React.Component {

  state = {
    userName: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: form submit', this.userNameInput.value);
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