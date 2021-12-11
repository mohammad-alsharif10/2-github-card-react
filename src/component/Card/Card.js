import React from "react";


class Card extends React.Component {
   profile = this.props;

   render () {
      return <div className="github-profile">
         <img
            src={this.profile.avatar_url}/>
         <div className="info">
            <div className="name">{this.profile.login}</div>
            <div className="company">{this.profile.login}</div>
         </div>
      </div>
   }
}



export default Card;
