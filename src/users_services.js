import axios from 'axios'

const API_URL = 'http://0.0.0.0:3001'

export function deleteUser (userId) {
  return axios.delete(`${API_URL}/users/${userId}`)
}

export function fetchUsers () {
  return axios.get(`${API_URL}/users`)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export function createUser (user) {
  return axios.post(`${API_URL}/users`, user)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export function editUser (user) {
  return axios.put(`${API_URL}/users/${user._id}`, user)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
}
