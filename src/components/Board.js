import React, { Component, Fragment } from 'react'

import Square from './Square'

class Board extends Component {
  renderSquare = (i) => {
    const { onClick } = this.props
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => onClick(i)}
      />
    )
  }

  render() {
    return (
      <Fragment>
        <div className="Board__Row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="Board__Row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="Board__Row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

export default Board