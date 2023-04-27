import User from '../../../models/User';
import { useRouter } from 'next/router';
import { Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Layout from '../../components/Layout';
import styles from '../../styles/Profile.module.css';
import connectDB from '../../../lib/connectDB';

const Profile = ({ user }) => {
	const router = useRouter();

	const logout = async() => {
		await fetch('/api/users/logout');
		router.push('/Login'); 
	};

	// if (!user) {
	// 	router.push('/Login');
	// }

	return (
		<Layout>
			<div className={styles.profile}>
				<UserOutlined className={styles.icon} />
				<h3 className={styles.title}>{user.username}</h3>
				<button
					className={styles.btn}
					onClick={logout}>
					Logout
				</button>
			</div>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	const userId = context.params.id;
	console.log(userId);
	await connectDB();

	const user = await User.findById(userId).lean();

	

	return {
		props: {
			user: {
				_id: user._id.toString(),
				username: user.username,
				password: user.password
			},
		},
	};
}

export default Profile;
