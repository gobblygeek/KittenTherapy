import React, { Component,Fragment } from "react";
import {Header,Footer} from './layouts/'
import Books from './books'
export default class extends Component {
  render() {
    return <Fragment>
      <Header />
      <Books/>
      <Footer />
    </Fragment>
  }
}