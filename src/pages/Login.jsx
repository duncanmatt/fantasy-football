import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Layout from '../components/Layout';
import {SignIn} from '../util/SignIn'
import { useRouter } from 'next/router';
import styles from '../styles/Form.module.css';

const Login = () => {
	const router = useRouter();

	const [message, setMessage] = useState('');

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const { password, username } = formData;

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLogin = async e => {
		e.preventDefault();

		try {
			const userRes = await SignIn({username, password});
			if (userRes?.error) {
				setMessage(userRes.error);
			} else {
				console.log(userRes);
				router.push('/Profile')
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Layout>
			<div className={styles.wrapper}>
				<form
					name='normal_login'
					className={styles.form}
					onSubmit={handleLogin}>
					<h2 className={styles.formTitle}>Login</h2>
					<p className={styles.message}>{message}</p>
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
							value={username}
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
							value={password}
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
