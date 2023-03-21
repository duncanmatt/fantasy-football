import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { login, reset } from '@/features/auth/authSlice';

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { username, password } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();	

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth,
	);

	useEffect(() => {
		if (isError) {
			console.error('USER CREDENTIALS NOT RECOGNIZED');
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [isError, isSuccess, user, message, navigate, dispatch]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onFinish = e => {
		console.log('CLICKED');
		e.preventDefault();

		const userData = {
			username,
			password,
		};

		dispatch(login(userData));
		console.log('Received values of form: ', userData);
	};

	if (isLoading) {
		return <Spin />
	}

	return (
		<Form
			name='normal_login'
			className='login-form'
			initialValues={{
				remember: true,
			}}
			onSubmitCapture={onFinish}>
			<Form.Item
				name='username'
				rules={[
					{
						required: true,
						message: 'Please input your Username!',
					},
				]}>
				<Input
					prefix={<UserOutlined className='site-form-item-icon' />}
					placeholder='Username'
					value={username}
				/>
			</Form.Item>
			<Form.Item
				name='password'
				rules={[
					{
						required: true,
						message: 'Please input your Password!',
					},
				]}>
				<Input
					prefix={<LockOutlined className='site-form-item-icon' />}
					type='password'
					placeholder='Password'
					onChange={onChange}
					value={password}
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item
					name='remember'
					valuePropName='checked'
					noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<a
					className='login-form-forgot'
					href=''>
					Forgot password
				</a>
			</Form.Item>

			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					className='login-form-button'>
					Log in
				</Button>
				Or <a href=''>register now!</a>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
