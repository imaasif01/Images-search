import React, { Component } from "react";
import "./PictureList.css";

class SearchBar extends Component {
  // state = { term: "" };
  // onInputChange=(event)=>{
  //   this.setState({
  //     term: event.target.value,
  //   })
  // }
  constructor() {
    super();
    this.state = {
      term: "",
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.userOnSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search pictures"
              value={this.state.term}
              ref={this.inputRef}
              onChange={(e) =>
                this.setState({ term: e.target.value.toLowerCase() })
              }
            />
          </div>
          {/* Word length: {this.state.term.length} */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
