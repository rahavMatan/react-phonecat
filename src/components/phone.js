import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getPhone} from '../actions'
import PhoneDetails from './phone-details'
import _ from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

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
  changeMainImage(index){
    this.setState({
      mainImageUrl:this.props.phone.images[index]
    })
  }
  renderThumbnails(){
    var { images,id }= this.props.phone;
    return images.map((url,index)=>{
      return(
        <div key={index} className="col-md-1 thumb-container" onClick={()=>{this.changeMainImage(index)}}>
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
    if(phone.type=='error'){
      return (
        <div>
          <h3>can't find requested phone..</h3>
        </div>
      )
    }
    return (
      <div>
        <div className="row top-row">
          <div className="main-pic col-sm-3">
            <CSSTransitionGroup transitionName="slide"
               transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            <img src={this.state.mainImageUrl} className="main-image" key={this.state.mainImageUrl}/>
            </CSSTransitionGroup>
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

        <div className="bottom-row">
          <PhoneDetails phone={phone}/>
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
