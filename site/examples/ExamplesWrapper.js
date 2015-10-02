"use strict"

require('./examplesPageStyle.less');

var React = require('react');

var MiniHeader = require('../MiniHeader');
var SideBar = require('../SideBar');
var Constants = require('../Constants');

var ExamplesWrapper = React.createClass({
  render(){
    return (
      <div className="examplesPage">
      <MiniHeader />
      <div className="pageBody" id="body">
        <div className="contents">
          <SideBar
            title="Examples"
            pages={Constants.examplesPages}
            example={this.props.example}
          />
        <div className="exampleContents">
          {this.props.Children}
        </div>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = ExamplesWrapper;
