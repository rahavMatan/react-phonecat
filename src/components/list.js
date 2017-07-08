import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getFiltered, getAll, sortBy} from '../actions'

class List extends Component {
  componentWillMount(){
    this.props.getAll();
  }
  render() {
    console.log(this.props.filtered);
    if(!this.props.filtered.length){
      return(
        <h2>Loading..</h2>
      )
    };
    return (
      <div className="row">
        <div className="col-md-3">
          serach
        </div>
        <div className="col-md-8">
          list
          <button onClick={()=>{this.props.getFiltered('')}}>filter</button>
          <button onClick={()=>{this.props.sortBy('name')}}>sort</button>
        </div>
      </div>
    );
  }
}

function stateToProps(state){
  return {
    filtered:state.filtered
  };
}
export default connect(stateToProps,{getFiltered,getAll, sortBy})(List)
