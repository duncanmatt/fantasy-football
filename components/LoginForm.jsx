import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { login, reset } from '@/features/auth/authSlice';

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
			router.push('/');
		}
		// TODO: if already logged in redirect to profile page

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
			className='login-form'
			onSubmit={onSubmit}>
			<div className='input-item'>
				<label htmlFor='username'>
					<UserOutlined />
				</label>
				<input
					type='text'
					className='username-input'
					required
					maxLength='60'
					name='username'
					value={username || []}
					onChange={onChange}
				/>
			</div>
			<div className='input-item'>
				<label htmlFor='password'>
					<LockOutlined />
				</label>
				<input
					type='password'
					className='password-input'
					required
					maxLength='60'
					name='password'
					value={password || []}
					onChange={onChange}
				/>
			</div>
			<button
				type='submit'
				className='form-submit-btn'>
				Login
			</button>
			<div className="register-link">
				Or <Link href='/Register'>Create an account</Link>
			</div>

		</form>
	);
};
export default LoginForm;
