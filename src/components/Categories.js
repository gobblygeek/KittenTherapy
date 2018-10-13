import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core";

class Catagories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value: value });
  }
  componentDidMount() {
    let uri = "https://api.thecatapi.com/v1/categories?";
    let key = "api_key=841abba3-518a-4852-a5f0-c5c8da04a947";
    let api = uri + key;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          console.log("we has result?", result);
          let categories = result.map(item => {
            return <Tab label={item.name} key={item.id} />;
          });
          this.setState({
            isLoaded: true,
            categories: categories
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log("we has error", error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        className="categories"
      >
        <Tab label="All" />
        {this.state.categories}
      </Tabs>
    );
  }
}

export default Catagories;
