import React, { Component } from 'react'

import {
  Button,
  Modal,
  Form
} from 'react-bootstrap'

class FormEditUser extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      show: false,
      user: this.props.user
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleEditChange = (event) => {
    const user = this.state.user
    user.name = event.target.value
    this.setState({
      user: user
    })
    console.log(this.state.user)
  }

  handleSave = (event) => {
    event.preventDefault()
    this.setState({
      show: false
    })
    return this.props.onUserEditCallback(this.state.user)
  }

  render () {
    return (
      <>
        <Button variant='primary' onClick={this.handleShow}>
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit user name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>User name</Form.Label>
              <Form.Control type='text' placeholder='Enter user name' value={this.state.user.name} onChange={this.handleEditChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={this.handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default FormEditUser
