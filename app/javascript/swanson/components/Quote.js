import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import * as actions from "../store/actions";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      submitted: false,
      selectedOption: null
    };
  };
  componentWillMount() {
    this.props.onLoad();
  };

  componentDidUpdate(prevProps) {
    if (this.props.quote !== prevProps.quote) {
      this.setState({ submitted: false })
    };
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.upVote(this.props.id, this.state.value);
    this.props.update();
    this.setState({
      submitted: true
    });
  };

  handleSelect = (e) => {
    this.setState({
      quote: this.props.quote,
      value: e.value,
      selectedOption: e.label
     });
  };


  options = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' }
  ];


  render() {
    return (
      <div className="text-center">
        <div className="quote-container">
          <h5>"{this.props.quote}" <br/>-Ron Swanson</h5>
        </div>
        <div className="ratings-container">
          <h6>
            Average Rating: {this.props.value > 0 ? this.props.value / this.props.votes : 0 }
          </h6>
          <h6>
            Total Votes: {this.props.votes}
          </h6>
        </div>
          {this.state.submitted && <p>Your rating has been submitted!</p> }
        <div>
          {this.props.user === null ?
            <a href="/users/sign_in" className="mb-3">Please sign in to vote</a> :
            <form onSubmit={this.handleClick}>
              <div className="dropdown-container">
                <Select
                  className="css-select"
                  name="Rating"
                  value={this.state.selectedOption}
                  options={this.options}
                  onChange={this.handleSelect}
                  placeholder={
                    this.state.selectedOption ? this.state.selectedOption : "Select..."
                  }
                />
                <button className="btn btn-danger submit-btn">Submit</button>
              </div>
            </form>
          }

        </div>
      </div>
    );
  };
};

const mapState = (state) => {
  const {
    loading,
    quote,
    id,
    value,
    votes,
    user
  } = state.quotes;
  return {
    loading,
    quote,
    id,
    value,
    votes,
    user
  };
};

const mapDispatch = (dispatch) => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_QUOTES
    }),
  upVote: (id, value) =>
    dispatch({
      type: actions.UPDATE_VOTES_RECIEVED,
      id: id,
      value: value
    }),
  update: () =>
    dispatch({
      type: actions.FETCH_UPDATE_QUOTES
    })
});

export default connect(mapState, mapDispatch)(Quote);
