import React from 'react'

export default class App extends React.Component {
  //constructor(props){
  //  super(props);
  //  this.state = {
  //    currentUser: this.props.currentUser
  //  };
  //}

  render() {
    return(
      <div className='App'>
        {this.props.children}
      </div>
    )
  }
}