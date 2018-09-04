import React, { Component } from 'react';
import Map from './map/map.js'

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1> Put your solution here!</h1>
        <Map />
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};

export default YourComponent;
