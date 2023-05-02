import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import Layout from '../components/Layout';
import styles from '../styles/Profile.module.css';

const Profile = () => {
	const { data: session } = useSession();
	const [user, setUser] = useState();
	
	const router = useRouter();

	useEffect(() => {
		if (!session) {
			router.push('/Login');
		}
	}, [session, router]);

	if (typeof window === undefined) return null;

	if (!session) {
		return <Layout>ACCESS DENIED</Layout>;
	}

	return (
		<Layout>
			<div className={styles.profile}>
				<h1 style={{ textAlign: 'center' }}>{session.user.username}</h1>
				<button
					className={styles.btn}
					onClick={signOut}>
					Logout
				</button>
			</div>
		</Layout>
	);
};

export default Profile;
