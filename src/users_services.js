import axios from 'axios';

const API_URL = 'http://0.0.0.0:3001';

export function deleteUser(userId) {
  alert('user wil be deleted: ' + userId);
  return axios.delete(`${API_URL}/users/${userId}`);
}

export function fetchUsers() {
  return axios.get(`${API_URL}/users`)
    .then(response => response.data)
    .catch(err => console.log(err));
}


