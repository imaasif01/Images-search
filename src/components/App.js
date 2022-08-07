import React, { Component } from "react";
import Unsplash from "../api/Unsplash";
// import axios from "axios";
import SearchBar from "./SearchBar";

import PicList from "./PicList";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(response);
    this.setState({
      images: response.data.results,
    });
    //first method
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "0px" }}>
        <SearchBar userOnSubmit={this.onSearchSubmit} />
        {/* Found:{this.state.images.length} images */}
        <PicList pics={this.state.images} />
      </div>
    );
  }
}

export default App;
