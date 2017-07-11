import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class ListItem extends Component {

  render(){
    var {phone} = this.props;
    return (
      <li className="list-group-item rounded">

        <Link to={`/${phone.id}`}>
            <img className="  list-thumbs" src={phone.imageUrl} />
        </Link>
        <Link to={`/${phone.id}`}>
          {phone.name}
        </Link>
        <p>
          {phone.snippet}
        </p>

      </li>
    )
  }
}
