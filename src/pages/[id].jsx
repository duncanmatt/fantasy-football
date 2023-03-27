import connectDB from '../../lib/connectDB';
import User from '../../models/User';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Profile = ({ user }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='page-container'
			key={user._id}>
			<UserOutlined />
			&nbsp;
			{user.username}
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};

export async function getServerSideProps({ params }) {
	await connectDB();

	const user = await User.findById(params.id).lean();
	user._id = user._id.toString();

	if (user) return { props: { user: JSON.parse(JSON.stringify(user)) } };
}

export default Profile;
