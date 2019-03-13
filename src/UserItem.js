
import React, { Component } from 'react'

import {
  Button,
  ListGroup
} from 'react-bootstrap'

import FormEditUser from './FormEditUser'

class UserItem extends Component {
  render () {
    return <div>
      <ListGroup.Item>
        name: {this.props.user.name}
        <Button variant='danger' name='id' onClick={this.delete.bind(this)}><span>Del</span></Button>
        <FormEditUser user={this.props.user} onUserEditCallback={this.userEdit} />
      </ListGroup.Item>
    </div>
  }

  delete () {
    return this.props.onUserDeleteCallback(this.props.user)
  }

  userEdit = () => {
    return this.props.onUserEditCallback(this.props.user)
  }
}
export default UserItem
