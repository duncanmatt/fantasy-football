import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Layout from '../components/Layout';
import { Spin } from 'antd';

import styles from '../styles/Form.module.css';

const Register = () => {
	const router = useRouter();

	const [user, setUser] = useLocalStorage('user', null);

	useEffect(() => {
		if (user) {
			router.push(`/users/${user._id}`);
		}
	}, [user, router]);

	const [formData, setFormData] = useState({
		username: '',
		password: '',
		password2: '',
	});

	const { username, password, password2 } = formData;

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async e => {
		e.preventDefault();

		if (password !== password2) {
			console.error('Passwords do not match');
		} else {
			const userData = {
				username,
				password,
			};

			await fetch('api/users/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			})
				.then(response => response.json())
				.then(data => {
					console.log('Success:', data);
					setUser(data);
				})
				.catch(error => {
					console.error('Error:', error);
				});

			console.log('Received values of form: ', userData);
		}
	};

	return (
		<Layout>
			<div className={styles.wrapper}>
				<form
					name='register'
					className={styles.form}
					onSubmit={onSubmit}>
					<h2 className={styles.formTitle}>Create Account</h2>
					<div className={styles.item}>
						<label htmlFor='username'>
							<UserOutlined />
						</label>
						<input
							type='text'
							className={styles.input}
							required
							maxLength='30'
							name='username'
							placeholder='Username'
							value={username || []}
							onChange={onChange}
						/>
					</div>
					<div className={styles.item}>
						<label htmlFor='password'>
							<LockOutlined />
						</label>
						<input
							type='password'
							className={styles.input}
							required
							maxLength='40'
							name='password'
							placeholder='Password'
							value={password || []}
							onChange={onChange}
						/>
					</div>
					<div className={styles.item}>
						<label htmlFor='password2'>
							<LockOutlined />
						</label>
						<input
							type='password'
							className={styles.input}
							required
							maxLength='60'
							name='password2'
							placeholder='Confirm Password'
							value={password2 || []}
							onChange={onChange}
						/>
					</div>
					<div className={styles.actions}>
						<button
							type='submit'
							className={styles.btn}>
							Register
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default Register;
