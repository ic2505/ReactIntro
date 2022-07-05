import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super(); // calls the constructor of the component, needed to use this function.
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  // Since app owns state, it can change its variables.

  onSearchChange = (event) => { // When creating your own method on a state use following syntax to make sure that the [this] value is according to where its created.
    this.setState({ searchfield: event.target.value })
    const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}

export default App;
