import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    const newValue = this.props.opacity - .10;
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        { (this.props.opacity >= 0.2) ? <ColorBox opacity={newValue} /> : null }
      </div>
    )
  }

}
