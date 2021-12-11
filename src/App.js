import './App.css';
import CardList from "./component/cardList/card-list";
import Form from "./component/form/form";
import {Component} from "react";

const testData = [];

class App extends Component {
   testData = [];
   state = {profiles: testData}
   addNewProfile = (profileDate) => {
      console.log (profileDate);
      testData.push (profileDate);
      this.setState ({profiles: testData});
   }

   render () {
      return (
         <div>
            <div className="header">{this.props.title}</div>
            <Form addNewProfile={this.addNewProfile}/>
            <CardList profiles={this.state.profiles}/>
         </div>
      );
   }
}

export default App;
