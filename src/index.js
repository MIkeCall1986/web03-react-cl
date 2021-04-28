import React, { Fragment, Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";

class App extends Component {

  state = {
    List:[
      {
        "Id": uuidv4(),
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar1.png",
        "Name": "Alexander Verdnam",
        "Phone": "+1-800-600-9898",
        "Email": "example@gmail.com",
        "Status": "Friend"
      },
       {
         "Id": uuidv4(),
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar5.png",
        "Name": "Jack Jackson",
        "Phone": "+1-800-700-1234",
        "Email": "jack@gmail.com",
        "Status": "Friend"
      },
       {
         "Id": uuidv4(),
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar3.png",
        "Name": "Camilla Terry",
        "Phone": "+1-800-745-1854",
        "Email": "camt@gmail.com",
        "Status": "Friend"
      },
    ]
  }

  render(){
    const { List } = this.state;
    return(
        <Fragment>
          <Header/>
          <ContactList ContactList={List} />
          <Footer/>
        </Fragment>
      )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));