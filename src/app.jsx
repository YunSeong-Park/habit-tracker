import React, { Component } from "react";
import "./app.css";
import Contents from './components/contents';
import Navbar from "./components/navbar";

class App extends Component {

  render(){
    return(
      <>
        <Navbar />
        <Contents />
      </>
    )
  }
}
export default App;
