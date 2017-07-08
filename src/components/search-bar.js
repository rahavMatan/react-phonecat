import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getFiltered} from '../actions'
class SearchBar extends Component {

  render(){
    return(
      <div>
        <input onChange={(event)=>{this.props.getFiltered(event.target.value)}}/>
      </div>
    )
  }
}

export default connect(null,{getFiltered})(SearchBar)
