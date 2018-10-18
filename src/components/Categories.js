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
    this.props.callbackParent(value);
  }

  getTabs(categories) {
    let tabset = categories.map(item => {
      return <Tab label={item} />;
    });
    return tabset;
  }
  render() {
    const { categories } = this.props;
    //console.log(categories);
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        scrollable
        className="categories"
      >
        <Tab label="All" />
        {this.getTabs(categories)}
      </Tabs>
    );
  }
}

export default Catagories;
