import connectDB from '../../lib/connectDB';
import User from '../../models/User';
import { useRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';
import styles from '../styles/Profile.module.css';

const Profile = ({ user }) => {
	const router = useRouter();

	const logout = () => {
		localStorage.removeItem('user');
		router.push('/');
	};

	return (
		<div
			className='page-container'
			key={user._id}>
			<div className={styles.profile}>
				<UserOutlined className={styles.icon} />
				<h3 className={styles.title}>{user.username}</h3>
				<button className={styles.btn} onClick={logout}>Logout</button>
			</div>
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
