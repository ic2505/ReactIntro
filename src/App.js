import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // calls the constructor of the component, needed to use this function.
    this.state = {
      robots: [],
      searchfield: "",
    };
    // console.log("constructor");
  }
  // Since app owns state, it can change its variables.

  // Lifecycle hook componenet that comes with react
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    // When creating your own method on a state use following syntax to make sure that the [this] value is according to where its created.
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1 className="myLoader">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />; 
          </Scroll>
        </div>
      );
    }
    // console.log(filteredRobots);
    // console.log("render");
  }
}

export default App;
