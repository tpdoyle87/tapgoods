import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";

class Button extends Component {

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-3 kill-padding">
            <button className="btn btn-info full-size" onClick={this.props.smallSwanson}>Quick Swanson</button>
          </div>
          <div className="col-xs-12 col-md-3 kill-padding">
            <button className="btn btn-success full-size" onClick={this.props.mediumSwanson}>Medium Swanson</button>
          </div>
          <div className="col-xs-12 col-md-3 kill-padding">
            <button className="btn btn-primary full-size" onClick={this.props.largeSwanson}>Large Swanson</button>
          </div>
          <div className="col-xs-12 col-md-3 kill-padding">
            <button className="btn btn-warning full-size" style={{color: 'white'}} onClick={this.props.swanson}>Any Swanson</button>
          </div>
        </div>
      </div>
    );
  };
};

const mapDispatch = (dispatch) => ({
  smallSwanson: () =>
    dispatch({
      type: actions.SMALL_SWANSON_QUOTE
    }),
  mediumSwanson: () =>
  dispatch({
    type: actions.MEDIUM_SWANSON_QUOTE
  }),
  largeSwanson: () =>
  dispatch({
    type: actions.LARGE_SWANSON_QUOTE
  }),
  swanson: () =>
  dispatch({
    type: actions.SWANSON_QUOTE
  })
});


export default connect(null, mapDispatch)(Button);
