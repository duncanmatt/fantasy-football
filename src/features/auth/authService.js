const USER_URL = '/api/users';

// Register user
const register = async userData => {
	try {
		const response = await fetch(USER_URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			}).catch((error) => {
				console.error(error);
			});

		if (!response.ok) {
			throw new Error(response.status);
		}
		return response;
	} catch (error) {
		console.error(error);
	}
};

// Login user
const login = async userData => {
	const response = await fetch(USER_URL, userData, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});

	const result = await response.json();
	if (result) {
		console.log(result);
		localStorage.setItem('user', JSON.stringify(result));
	}
	return result;
};

const logout = () => localStorage.removeItem('user');

const authService = {
	register,
	logout,
	login,
};

export default authService;
