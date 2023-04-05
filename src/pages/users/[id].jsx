import { useEffect, useState } from 'react';
import connectDB from '../../../lib/connectDB';
import User from '../../../models/User';
import { protect } from '../../../middleware';
import { useRouter } from 'next/router';
import { Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Layout from '../../components/Layout';
import styles from '../../styles/Profile.module.css';

const Profile = ({ user }) => {
	const router = useRouter();

	const logout = () => {
		localStorage.removeItem('user');
		router.push('/');
	};

	return (
		<Layout key={user._id}>
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

export async function getServerSideProps({ params }) {
	await connectDB();

	const user = await User.findById(params.id).lean();
	user._id = user._id.toString();

	protect(user);

	if (user)
		return {
			props: {
				user: {
					_id: user._id,
					username: user.username,
				},
			},
		};
}

export default Profile;
