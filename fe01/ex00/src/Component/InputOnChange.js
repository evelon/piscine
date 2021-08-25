import React, { Component } from 'react';

class InputOnChange extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
    console.log(this.state.value);
  }

  render() {
    const { value } = this.state;
    const { handleChange } = this;
    return (
      <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
    )
  }
}

export default InputOnChange;