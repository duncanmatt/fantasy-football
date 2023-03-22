import axios from 'axios';

const USER_URL = '/api/users';

// Register user
const register = async userData => {
	const response = await axios.post(USER_URL, userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

// Login user
const login = async userData => {
	const response = await axios.post(USER_URL + '/Login', userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

const logout = () => localStorage.removeItem('user');

const authService = {
  register,
  logout,
  login,
}

export default authService;
