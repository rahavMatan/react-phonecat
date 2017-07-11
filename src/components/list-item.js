import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class ListItem extends Component {

  render(){
      var {phone} = this.props;
    return (
      <li className="list-group-item rounded">
        <Link to={`/${phone.id}`}>
        <div >
          {phone.name}
        </div>
      </Link>
      </li>
    )
  }
}
