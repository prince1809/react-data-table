"use strict";

require('./base.less');

var Constants = require('./Constants');
var HomePage = require('./home/HomePage');
//var TableAPIPage = require('./docs/TableAPIPage');
var ExamplesPage = require('./examples/ExamplesPage');
var React = require('react');


var ExamplePages = Constants.ExamplePages;

var IndexPage = React.createClass({

  statics: {
    getDoctype(){
      return '<!doctype html>';
    },

    renderToString(props){
      return IndexPage.getDoctype() +
      React.renderToString(<IndexPage {...props} />);
    },
  },

  getInitialState(){
    return {
      renderPage: !this.props.devMode
    };
  },

  render(){
    var browserInitScriptObj = {
      __html: 'window.INITIAL_PROPS = ' + JSON.stringify(this.props) + ';\n'
    };

    return(
      <html>
      <head>
        <meta charset="utf-8"/>
        <title> React Js DataTable </title>
      </head>
      <body>
        {this.state.renderPage && this._renderPage()}

        <script dangerouslySetInnerHTML={browserInitScriptObj} />
        <script src={this.props.files['main.js']}></script>
      </body>
      </html>
    );
  },

  _renderPage(){
    switch (this.props.location) {
      case OtherPages.HOME.location:
        return <HomePage />;
      case APIPages.TABLE_API.location:
        return <TableAPIPage />;
      case APIPages.COLUMN_API.location:
        return <ColumnAPIPage />;
      case APIPages.COLUMNGROUP_API.location:
        return <ColumnGroupAPIPage />;
      }

      for(var key in ExamplePages) {
        if(ExamplePages.hasOwnProperty(key) &&
          ExamplePages[key].location === this.props.location) {
            return <ExamplesPage example={ExamplePages[key]} />;
          }
      }

      throw new Error(
        'Page of location' +
          JSON.stringify(this.props.location) +
          ' not found.'
      );
  },
  componentDidMount(){
    if(!ths.state.renderPage){
      this.setState({
        renderPage: true
      });
    }
  }
});

module.exports = IndexPage;
