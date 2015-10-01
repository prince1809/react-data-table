"use strict";

var ExampleHeader = require('./ExampleHeader');
var ExamplesWrapper = require('./ExamplesWrapper');
var TouchExampleWrapper = require('./TouchExampleWrapper');
var React = require('react');
var Constants = require('../Constants');


var ExamplePages = React.createClass({
  getInitialState(){
    return {
      renderPage: false
    };
  },

  render(){
    return (
      <ExamplesWrapper {...this.props}>
        <ExampleHeader {...this.props} />
        {this.state.renderPage && this._renderPage()}
      </ExamplesWrapper>
    );
  },

  _renderPage(){
    // Require common FixedDataTable CSS.

    switch(this.props.example){
      case ExamplePages.OBJECT_DATA_EXAMPLE:
        var ObjectDataExample = require('./ObjectDataExample');

        return (
          <TouchExampleWrapper {...this.state}>
            <ObjectDataExample />
          </TouchExampleWrapper>
        );
      case ExamplePages.RESIZE_EXAMPLE:
        var ResizeExample = require('./ResizeExample');
        return (
          <TouchExampleWrapper {...this.state}>
            <ResizeExample />
          </TouchExampleWrapper>
        );
    }

  },

  componentDidMount(){
    this._update();
    var win = window;
    if(win.addEventListener){
      win.addEventListener('resize', this._onResize, false);
    }else if(win.attachEvent){
      win.attachEvent('onresize',this._onResize);
    }else {
      win.onresize = this._onResize;
    }
  },

  _onResize(){
    clearTimeout(this._updateTimer);
    this._updateTimer = setTimeout(this._update, 16);
  },

  _update(){
    var win = window;

    var widthoffset = win.innerWidth < 680 ? 0 : 240;

    this.setState({
      renderPage: true,
      tableWidth: win.innerWidth - widthoffset,
      tableHeight: win.innerHeight - 200
    });
  }
});

module.exports = ExamplePages;
