import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  return(
    <Fragment>
      <Header/>
      <ContactList/>
      <Footer/>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));