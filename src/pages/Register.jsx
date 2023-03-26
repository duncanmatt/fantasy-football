import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { register } from '../features/auth/authSlice';
import styles from '../styles/Form.module.css';

const Register = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		password2: '',
	});

	const router = useRouter();
	const dispatch = useDispatch();

	const { username, password, password2 } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth,
	);

	useEffect(() => {
		if (isError) {
			console.error(message);
		}

		if (isSuccess || user) {
			router.push(`/`);
		}
	}, [isError, isSuccess, user, message, router]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = e => {
		e.preventDefault();

		if (password !== password2) {
			console.error('Passwords do not match');
		} else {
			const userData = {
				username,
				password,
				password2,
			};

			dispatch(register(userData));
			console.log('Received values of form: ', userData);
		}
	};

	if (isLoading) {
		return <Spin />;
	}

	return (
		<div className='page-container'>
			<h2>Create Account</h2>
			<form
				name='register'
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
						maxLength='30'
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
						maxLength='40'
						name='password'
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
	);
};

export default Register;
