"use strict"

var React = require('react');
var Constants = require('../Constants');

var ExampleHeader = React.createClass({
  render() {
    return (
      <div className="exampleHeader">
        <div className="exampleControls">
        </div>
        <h1 className="exampleTitle">
          <span className="exampleTitleName">
            Example:
          </span>
          {' '}
          {this.props.example.title}
        </h1>
        <p className="exampleDescription">
          {this.props.example.description}
        </p>
      </div>
    );
  }
});

module.exports = ExampleHeader;
