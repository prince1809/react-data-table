"use strict";

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

  },
});
