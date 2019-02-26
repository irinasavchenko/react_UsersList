import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {
  Button,
  Container,
  Modal,
  ListGroup,
  Form
} from 'react-bootstrap';
import UserItem from './UserItem';

const API_URL = 'http://0.0.0.0:3001';

class App extends Component {
  constructor (props) {

    super(props);

    this.state = {
      users: [],
    };

    this.fetchListOfUsers = this.fetchListOfUsers.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  fetchListOfUsers() {
    return axios.get(`${API_URL}/users`)
      .then(response => {
        this.setState ({
          users: response.data
        });
      });
  }

  componentWillMount() {
    this.fetchListOfUsers();
  }

  deleteUser(deletedUser) {
    return axios
      .delete(`${API_URL}/users/${deletedUser._id}`)
      .then(() => {
        const userListWithoutDeletdUser = this.state.users.filter(user => user._id !== deletedUser._id);

        this.setState({
          users: userListWithoutDeletdUser,
        });
      });
  }

  render() {
    const { users } = this.state;

    return <Container>
      <Modal.Dialog>

        <Modal.Header closeButton>
          <Modal.Title>Users list</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup>
            {users.map(user => <UserItem user={user} onUserDeleteCallback={this.deleteUser}/> )}
          </ListGroup>
            <div className = "addUser">
            <Form>
              <Form.Group>
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Enter user name"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>

    </Container>

  }
}
export default App;



