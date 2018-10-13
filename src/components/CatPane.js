import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";

class CatPane extends Component {
  constructor() {
    super();
    this.state = {
      catpicture: ""
    };
  }
  componentDidMount() {
    let uri = "https://api.thecatapi.com/v1/images/search?limit=1&";
    let key = "api_key=841abba3-518a-4852-a5f0-c5c8da04a947";
    let api = uri + key;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          console.log("we has result?", result);
          let picture = result.map(pic => {
            return (
              <img
                class="cat"
                src={pic.url}
                alt="we can has kitten therapy :)"
              />
            );
          });
          this.setState({
            isLoaded: true,
            catpicture: picture
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
      <Paper elevation={1} square="true" className="center">
        {this.state.catpicture}
        <Typography variant="body1">
          Result from Cat API will go here. All kudos go to
          https://thecatapi.com/ for the images.
        </Typography>
      </Paper>
    );
  }
}

export default CatPane;
