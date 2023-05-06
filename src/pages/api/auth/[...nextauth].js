import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '../../../../lib/connectDB';
import { compare } from 'bcryptjs';
import User from '../../../../models/User';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const options = {
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			id: 'credentials',
			name: 'Credentials',
			type: 'credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: 'username', type: 'text' },
				password: { label: 'password', type: 'password' },
			},

			async authorize(credentials) {
				await connectDB().catch(err => {
					throw new Error(err);
				});

				

				const user = await User.findOne({ username: credentials?.username });

				if (!user) {
					throw new Error('Invalid credentials');
				}

				const valid = user && (await compare(credentials?.password, user.password));

				if (!valid) {
					throw new Error('Invalid credentials');
				}
				return user;
				// valid ? user : null;
			},
		}),
	],

	pages: {
		signIn: '/Login',
	},
	secret: secret,
	session: {
		strategy: 'jwt',
	},
	jwt: {
		maxAge: 60 * 60 * 24 * 30,
	},

	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user);
			return token;
		},

		session: async ({ session, token }) => {
			const user = token.user;
			session.user = user;
			return session;
		},
	},
};

export default NextAuth(options);
