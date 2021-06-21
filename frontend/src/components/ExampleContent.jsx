import React, { Component } from 'react';

class ExampleContent extends Component {

  render() {
    return (
      <div className="row">
        <hr></hr>
        <h5>{this.props.data}</h5>
        <hr></hr>
        <h5>{this.props.meaning}</h5>
      </div>
    )
  }
}

export default ExampleContent;