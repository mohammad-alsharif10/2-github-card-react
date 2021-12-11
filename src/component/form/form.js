import React from "react";
import axios from "axios";
import GithubUser from "../model/github-user";

class Form extends React.Component {

   state = {userNameInputValue: '', test: 'test'}
   handleSubmit = async (event) => {
      event.preventDefault ();
      console.log (this.state);
      const resp: GithubUser = (await axios.get (`https://api.github.com/users/${this.state.userNameInputValue}`)).data;
      console.log ('async function call', resp.avatar_url)
      this.props.addNewProfile (resp);
      // axios.get (`https://api.github.com/users/${this.state.userNameInputValue}`).then (value => console.log (value)
   }


   render () {
      return <div>
         <h1>mohammad-alsharif10</h1>
         <form onSubmit={this.handleSubmit}>
            <input type="text"
                   placeholder="GitHub username"
                   required
                   value={this.state.userNameInputValue}
                   onChange={event => this.setState ({userNameInputValue: event.target.value})}
            />
            <button>Add card</button>
         </form>
      </div>;
   }
}

export default Form;
