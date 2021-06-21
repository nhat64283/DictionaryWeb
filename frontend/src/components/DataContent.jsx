import React, { Component } from 'react';
import MeaningContent from './MeaningContent';

class DataContent extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <h3>{this.props.type}</h3>
        </div>
        {this.props.meanings.map((value, index) => {
          return (
            <MeaningContent data={value.data} examples={value.examples}></MeaningContent>
          )
        })}
      </div>

    );
  }
}

export default DataContent;