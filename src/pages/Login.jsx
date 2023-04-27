import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Layout from '../components/Layout';

import styles from '../styles/Form.module.css';

const Login = () => {
	
	const router = useRouter();

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const { username, password } = formData;

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async e => {
		e.preventDefault();

		const userData = {
			username,
			password,
		};

		const user = await fetch('/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});


		if (user.status === 200) {
			const data = await user.json()
			router.push(`/users/${data.user}`);
			console.log(data)
			console.log('successs')
		} else {
			throw new Error('no response');
		}

		console.log('Received values of form:', userData);
	};

	return (
		<Layout>
			<div className={styles.wrapper}>
				<form
					name='normal_login'
					className={styles.form}
					onSubmit={onSubmit}>
					<h2 className={styles.formTitle}>Login</h2>
					<div className={styles.item}>
						<label
							className={styles.icon}
							htmlFor='username'>
							<UserOutlined />
						</label>
						<input
							type='text'
							className={styles.input}
							required
							maxLength='60'
							name='username'
							placeholder='Username'
							value={username || []}
							onChange={onChange}
						/>
					</div>
					<div className={styles.item}>
						<label
							className={styles.icon}
							htmlFor='password'>
							<LockOutlined />
						</label>
						<input
							type='password'
							className={styles.input}
							required
							maxLength='60'
							name='password'
							placeholder='Password'
							value={password || []}
							onChange={onChange}
						/>
					</div>
					<div className={styles.actions}>
						<button
							type='submit'
							className={styles.btn}>
							Login
						</button>
						Or
						<Link
							className={styles.link}
							href='/Register'>
							Create an account
						</Link>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default Login;
