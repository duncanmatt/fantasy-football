const USER_URL = '/api/users';

// Register user
const register = async userData => {
	try {
		const response = await fetch(USER_URL + '/register', {
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
				localStorage.setItem('user', JSON.stringify(data));
			})
			.catch(error => {
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
	try {
		const response = await fetch(USER_URL + '/login', {
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
				localStorage.setItem('user', JSON.stringify(data));
			})
			.catch(error => {
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

const logout = () => localStorage.removeItem('user');

const authService = {
	register,
	logout,
	login,
};

export default authService;
