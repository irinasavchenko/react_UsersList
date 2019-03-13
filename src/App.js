import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import {
  Button,
  Container,
  Modal,
  ListGroup
} from 'react-bootstrap'
import UserItem from './UserItem'
import {
  deleteUser,
  fetchUsers,
  createUser,
  editUser
} from './users_services'
import FormAddUser from './FormAddUser'
// import EditUser from './FormEditUser'

const API_URL = 'http://0.0.0.0:3001'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }

  fetchListOfUsers = () => {
    return fetchUsers()
      .then(users => {
        this.setState({
          users: users
        })
      })
  }

  componentWillMount = () => {
    this.fetchListOfUsers()
  }

  deleteOneUser = (deletedUser) => {
    return deleteUser(deletedUser._id)
      .then(() => {
        const userListWithoutDeletdUser = this.state.users.filter(user => user._id !== deletedUser._id)

        this.setState({
          users: userListWithoutDeletdUser
        })
      })
  }

  updateUser = (updatedUser) => {
    return editUser(updatedUser)
      .then(() => {
        const indexOfUpdatedUser = this.state.users.findIndex((user) => {
         if (user._id === updatedUser._id)
           return true
        })

        this.state.users.splice(indexOfUpdatedUser,1,updatedUser)
        this.setState({
          users: this.state.users
        })
      })
  }

  handleSubmit = (userName) => {
    const newUser = {
      name: userName
    }

    return createUser(newUser)
      .then(createdUser => {
        console.log(createdUser)
        const usersWithAddUser = this.state.users.concat(createdUser)
        this.setState({
          users: usersWithAddUser
        })
      })
  }

  render () {
    const { users } = this.state

    return <Container>
      <Modal.Dialog>

        <Modal.Header closeButton>
          <Modal.Title>Users list</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup>
            {users.map(user => <UserItem user={user} onUserDeleteCallback={this.deleteOneUser} onUserEditCallback={this.updateUser}/>)}
          </ListGroup>
          <div className='addUser'>
            <FormAddUser onHandleSubmitCallback={this.handleSubmit} />
          </div>
        </Modal.Body>

      </Modal.Dialog>

    </Container>
  }
}

export default App
