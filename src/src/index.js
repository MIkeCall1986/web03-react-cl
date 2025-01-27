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
    List: [
      {
        "Id": uuidv4(),
        "Avatar": 67,
        "Gender": "men",
        "Name": "Alexander Verdnam",
        "Phone": "+1-800-600-9898",
        "Email": "example@gmail.com",
        "Status": "Friend"
      },
      {
        "Id": uuidv4(),
        "Avatar": 5,
        "Gender": "men",
        "Name": "Jack Jackson",
        "Phone": "+1-800-700-1234",
        "Email": "jack@gmail.com",
        "Status": "Friend"
      },
      {
        "Id": uuidv4(),
        "Avatar": 77,
        "Gender": "women",
        "Name": "Camilla Terry",
        "Phone": "+1-800-745-1854",
        "Email": "camt@gmail.com",
        "Status": "Friend"
      },
    ]
  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const tmpList = [...partOne, ...partTwo];
    this.setState({
      List: tmpList
    })

  }
 
  state = {
    text: 'Friends'
  }

  onClickButton1 = () => {
    this.setState({
      text: 'Work'
    });
  }
onClickButton2 = () => {
  this.setState({
    text: 'Family'
  });
}  
render(){
  return (
    <div>
      <button onClick={this.onClickButton1}></button>
      <button onClick={this.onClickButton2}></button>
      <h1>{this.state.text}</h1>
    </div>
  )
}
 
}




  render() {
    const { List } = this.state;
    console.log("List = ", List)
    return (
      <Fragment>
        <Header />
        <ContactList onDelete={this.onDelete} ContactList={List} />
        <Footer />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));