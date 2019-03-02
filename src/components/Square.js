import React, { Component } from 'react'

class Square extends Component {
  render() {
    const { value, onClick } = this.props

    return (
      <button
        className="Square"
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

export default Square