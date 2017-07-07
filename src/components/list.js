import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAll} from '../actions'

class List extends Component {
  componentWillMount(){
    this.props.getAll();
  }
  render() {
    console.log(this.props.all);
    return (
      <div>home alone..</div>
    );
  }
}

function stateToProps(state){
  return {
    all:state.all
  };
}
export default connect(stateToProps,{getAll})(List)
