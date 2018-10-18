import React, { Component, Fragment } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TopNav from "./TopNav";
import CatPane from "./CatPane";
import Categories from "./Categories";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#880E4F"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E3F2FD"
      // dark: will be calculated from palette.secondary.main,
    }
    // error: will use the default color
  }
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryList: [],
      category: ""
    };
  }
  componentDidMount() {
    let uri = "https://api.thecatapi.com/v1/categories?";
    let key = "api_key=841abba3-518a-4852-a5f0-c5c8da04a947";
    let api = uri + key;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          let categoryList = result;
          let categories = result.map(item => {
            return item.name;
          });
          this.setState({
            isLoaded: true,
            categories: categories,
            categoryList: categoryList
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
  handleCategorySelected = catindex => {
    this.setState({ category: this.state.categoryList[catindex].id });
  };
  render() {
    const category = this.state.category;
    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <TopNav />
          <CatPane category={category} />
          <Categories
            categories={this.state.categories}
            callbackParent={category => this.handleCategorySelected(category)}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
