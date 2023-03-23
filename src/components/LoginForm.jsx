import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { login, reset } from '../features/auth/authSlice';
import styles from '../styles/Form.module.css';

const LoginForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { username, password } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth,
	);

	useEffect(() => {
		if (isError) {
			console.error(message);
		}

		if (isSuccess || user) {
			// router.push(`/users/${username}`);
		}
		// TODO: if already logged in redirect to profile page

		dispatch(reset());
	}, [isError, isSuccess, user, username, message, router, dispatch]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = e => {
		e.preventDefault();

		const userData = {
			username,
			password,
		};

		dispatch(login(userData));
		console.log('Received values of form: ', userData);
	};

	if (isLoading) {
		return <Spin />;
	}

	return (
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
				Or &nbsp;<Link className={styles.link} href='/Register'>Create an account</Link>
			</div>
		</form>
	);
};
export default LoginForm;
