import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getPhone} from '../actions'

class Phone extends Component{
  constructor(props){
    super()
    this.state={
      mainImageUrl:null
    }
  }
  componentWillMount(){
    var self=this;
    var cb = (url)=>{
      self.setState({
        mainImageUrl:url
      })
    }
    this.props.getPhone(this.props.match.params.id, cb);
  }
  render(){
    if(!this.props.phone){
      return (
        <h2>Loading..</h2>
      )
    }
    return (
      <div>
        <div className="row top-row">
          <div className="main-pic col-sm-3">
            <img src={this.state.mainImageUrl} className="main-image" />
          </div>
          <div className="main-description col-sm-8">
           main titele
          </div>
        </div>
        <div className="row bottom-row">

        </div>
      </div>
    )
  }
}

function stateToProps(state){
  return {
    phone: state.phone
  }
}

export default connect(stateToProps,{getPhone})(Phone);
