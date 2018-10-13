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
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <TopNav />
          <CatPane />
          <Categories />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
