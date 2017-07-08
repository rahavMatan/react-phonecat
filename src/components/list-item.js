import React, {Component} from 'react'

export default class ListItem extends Component {

  render(){
      var {phone} = this.props;
    return (
      <li className="list-group-item rounded">
        <div >
          {phone.name}
        </div>
      </li>
    )
  }
}
