import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return(
    <Fragment>
      <Header/>
      <h2>Contact list</h2>
      <Footer/>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));