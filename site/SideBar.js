"use strict";

var React = require('react');
var Constants = require('./Constants');

var SideBar = React.createClass({
  render(){
    return (
      <div className="sideBar">
        <div className="scrollContent">
          <h4 className="groupTitle"> Title for Page</h4>
        </div>
      </div>

    );
  }
});

module.exports = SideBar;
