import React, {Component} from 'react';
import _ from 'lodash';

export default class PhoneDetails extends Component {

  renderCard(title, details, span){

    function recursiveRender(item, index=null){
      if(_.isString(item)){
        return (
          <div className="" key={index}>{item}</div>
        )
      } else if (_.isArray(item)){
        return _.map(item,function(value,index){
          return recursiveRender(value,index);
        })
      } else if(_.isObject(item)){
        return _.map(item,function(value,key){
          return (
            <div key={key}>
              <b>{key}:</b>
              <div>{recursiveRender(value,key)}</div>
            </div>
          )
        })
      } else if(_.isBoolean(item)){
        return (
          <div>
           {item?'Yes':'No'}
          </div>
        )
      }
    }

    return(
      <div className={`col-lg-${span?span:'1'}`} >
        <div className="">
          <h5 className=""><b>{title}</b></h5>
          {recursiveRender(details)}
        </div>
      </div>
    )
  }

  render(){
    var {phone}=this.props;
    return (
      <div className="details-container">
        <div className="row">

        {this.renderCard('Availability and Networks',phone.availability)}
        {this.renderCard('Battery',phone.battery)}
        {this.renderCard('Storage And Memory',phone.storage)}
        {this.renderCard('Connectivity',phone.connectivity, 2)}
        {this.renderCard('Android',phone.android)}
        {this.renderCard('Size and Weight',phone.sizeAndWeight)}
        {this.renderCard('Display',phone.display)}
        {this.renderCard('Hardware',phone.hardware)}
        {this.renderCard('Camera',phone.camera)}

        </div>
        <div className="row additional-features">
         {this.renderCard('Additional Features',phone.additionalFeatures, 3)}
        </div>
      </div>
    )
  }
}
