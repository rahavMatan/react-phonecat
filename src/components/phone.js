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
  renderThumbnails(){
    var { images,id }= this.props.phone;
    return images.map((url,index)=>{
      return(
        <div key={index} className="col-md-1 thumb-container">
          <img className="phone-thumbs" src={url} />
        </div>
      )
    })
  }
  render(){
    var {phone} = this.props
    if(!phone){
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
            <div className="bottom-border"><h2>{phone.name}</h2></div>
            <p>{phone.description}</p>
            <div className="row">
              <div className="thumbs-container">
                  {this.renderThumbnails()}
              </div>
            </div>
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
