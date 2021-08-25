import React, { Component } from 'react';

class InputOnClick extends Component {
  state = {
    value: ''
  }

  onClick = () => {
    console.log(this.state.value);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    // const { value } = this.state;
    const { onClick } = this;
    return (
      <form>
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
      <button
        type="buton"
        onClick={onClick}
        onChange={(e)=>{}}
      >버튼</button>
    </form>
    )
  }
}

export default InputOnClick;