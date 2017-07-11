import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getFiltered, sortBy} from '../actions'

class SearchBar extends Component {

  render(){
    return(

      <div>

      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label text-md-right">Search:</label>
          <div className="col-sm-8">
            <input className="form-control" onChange={(event)=>{this.props.getFiltered(event.target.value)}}/>
          </div>
        </div>


          <div className="form-group row">
            <label className="col-sm-4 col-form-label text-md-right">Order by:</label>
            <div className="col-sm-8">
              <select className="form-control" onChange={(event)=>{this.props.sortBy(event.target.value)}}>
                <option value="age">Age</option>
                <option value="name">Alphabet</option>
              </select>
            </div>
          </div>

     </form>

    </div>
    )
  }
}

export default connect(null,{getFiltered, sortBy})(SearchBar)
