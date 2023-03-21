import LoginForm from '../../components/LoginForm';
import { useSelector } from 'react-redux';

function Login() {
	return (
		<div className='page-container'>
			<h2>Login</h2>
			<br />
			<LoginForm />
		</div>
	);
}

export default Login;
