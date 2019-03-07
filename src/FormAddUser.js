import React, { Component } from 'react'

import {
  Button,
  Form
} from 'react-bootstrap'

class FormAddUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this)
  }

  handleInputChange (event) {
    console.log('Input has been changed', event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  render () {
    return <div>
      <Form onSubmit={this.handleSubmitAdd}>
        <Form.Group>
          <Form.Label>User name</Form.Label>
          <Form.Control type='text' placeholder='Enter user name' value={this.state.name} onChange={this.handleInputChange} />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Add
        </Button>
      </Form>
    </div>
  }

  handleSubmitAdd (event) {
    event.preventDefault()
    console.log(this.state.name)
    return this.props.onHandleSubmitCallback(this.state.name)
  }
}

export default FormAddUser
