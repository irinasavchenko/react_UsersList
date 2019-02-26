
import React, { Component } from 'react';

import {
  Button,
  ListGroup,

} from 'react-bootstrap';

//import { deleteUser } from './users_services';
import { deleteItem } from './App.js';

import axios from 'axios';

class UserItem extends Component {

  render() {
    return <div>
      <ListGroup.Item>
        name: {this.props.user.name}
        <Button variant="danger" name="id" onClick={this.delete.bind(this)}><span>×</span></Button>
      </ListGroup.Item>
    </div>
  }

  delete() {
    return this.props.onUserDeleteCallback(this.props.user);
  }
}

export default UserItem;
