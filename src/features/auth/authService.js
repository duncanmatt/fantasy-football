

const USER_URL = '/api/users';

// Register user
const register = async userData => {
	const response = await fetch(USER_URL, userData, {
		method: 'POST',
		header: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({userData}),
	});

	const result = await response.json();

	if (result) {
		localStorage.setItem('user', JSON.stringify(result.user));
	}
	return result;
};

// Login user
const login = async userData => {
	const response = await fetch(USER_URL + `/${userData.username}`, userData, {
		method: 'GET',
		header: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ userData }),
	});

	const result = await response.json();
	if (result) {
		localStorage.setItem('user', JSON.stringify(result));
	}
	return result;
};

const logout = () => localStorage.removeItem('user');

const authService = {
  register,
  logout,
  login,
}

export default authService;
