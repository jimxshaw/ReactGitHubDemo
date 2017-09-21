import React from 'react';

class Form extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: form submit', this.userNameInput.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={(input) => this.userNameInput = input}
          type='text' placeholder='GitHub username'/>
        <button type='submit'>Add card</button>
      </form>
    );
  };
}

export default Form;