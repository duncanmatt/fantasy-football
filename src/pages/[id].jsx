import connectDB from '../../lib/connectDB';
import User from '../../models/User';
import { UserOutlined } from '@ant-design/icons';

const Profile = ({ user }) => {
	return (
		<div className='page-container' key={user._id}>
			<UserOutlined />
			&nbsp;
			{user.username}
      {/* ADD LOGOUT */}
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
