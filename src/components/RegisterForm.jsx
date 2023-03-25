import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { register, reset } from '../features/auth/authSlice';
import styles from '../styles/Form.module.css';

const RegisterForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password2: '',
	});

	const { username, password, password2 } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth,
	);

	useEffect(() => {
		if (isError) {
			console.error(message);
		}

		if (isSuccess && user) {
			router.push(`/${user.id}`);
		}

		dispatch(reset());
	}, [isError, isSuccess, user, message, router, dispatch]);

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
	);
};
export default RegisterForm;
