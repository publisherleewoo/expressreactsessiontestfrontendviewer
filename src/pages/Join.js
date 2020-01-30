import React, { Component } from 'react';
import JoinPresenter from '../components/presenter/JoinPresenter';

class Join extends Component {
   
    constructor(props){
      super(props)
      this.state={
        isLogin:false
      }
    }

    push=(arg)=>{
      console.log("emit")
      this.props.history.push(arg)
    }

    render() {
      
        return (
          <JoinPresenter routerPush={this.push} /> 
        );
    }
}

export default Join;