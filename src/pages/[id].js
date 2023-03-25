// import { useState } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import connectDB from '../../lib/connectDB';
import User from '../../models/User';

const Profile = ({ user }) => {
	

  return (
    <div key={user._id}>
      <h3>Profile</h3>
      {user.username}
    </div>
  )

};

export async function getServerSideProps({ params }) {
  await connectDB();

	const user = await User.findById(params.id);
	user._id = user._id.toString();
	if (user) return { props: { user } };
}

export default Profile;
