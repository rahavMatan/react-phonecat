import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getFiltered, getAll, sortBy} from '../actions'
import ListItem from './list-item';
import SearchBar from './search-bar';

class List extends Component {
  componentWillMount(){
    this.props.getAll();
  }
  renderList(){
    return this.props.filtered.map(phone=>{
      return (
        <ListItem key={phone.id} phone={phone} />
      )
    })
  }
  render() {
    if(!this.props.filtered.length){
      return(
        <h2>Loading..</h2>
      )
    };
    return (
      <div className="row">
        <div className="col-md-3">
          <SearchBar />
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            { this.renderList()}
          </ul>

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
