import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Spin } from 'antd';
import { login, reset } from '../features/auth/authSlice';
import styles from '../styles/Form.module.css';

function Login() {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const { username, password } = formData;

	const router = useRouter();
	const dispatch = useDispatch();

	const {user, isLoading, isError, isSuccess, message} = useSelector(
		state => state.auth,
	);

	useEffect(() => {
		if (isError) {
			console.error(message);
		}

		if (isSuccess || user) {
			router.push(`/${user._id}`);
		}

		dispatch(reset());
	}, [isError, isSuccess, user, message, router, dispatch]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}

	const onSubmit = e => {
		e.preventDefault();

		const userData = {
			username,
			password
		};

		dispatch(login(userData));
		console.log('Received values of form:', userData);
	}

	if (isLoading) {
		return <Spin />
	}

	return (
		<div className='page-container'>
			<h2>Login</h2>
			<form
				name='normal_login'
				className={styles.form}
				onSubmit={onSubmit}>
				<div className={styles.item}>
					<label htmlFor='username'>
						<UserOutlined />
					</label>
					<input
						type='text'
						className={styles.input}
						required
						maxLength='60'
						name='username'
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
						maxLength='60'
						name='password'
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
					Or &nbsp;
					<Link
						className={styles.link}
						href='/Register'>
						Create an account
					</Link>
				</div>
			</form>
		</div>
	);
}

export default Login;
