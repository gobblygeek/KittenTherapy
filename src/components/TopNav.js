import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Pets } from "@material-ui/icons";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography color="inherit" variant="headline" className="grow1">
        Your Daily Cat
      </Typography>
      <Pets />
    </Toolbar>
  </AppBar>
);
