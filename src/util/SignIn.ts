import { signIn } from 'next-auth/react';

export const SignIn = async ({ username, password }) => {
	const res = await signIn('credentials', {
		redirect: false,
		username,
		password,
	});

	return res;
};
