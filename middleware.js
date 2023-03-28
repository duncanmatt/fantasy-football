import { verify } from 'jsonwebtoken';
import User from './models/User';

export const protect = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
      // get token from header
			token = req.headers.authorization.split('')[1];
      // verify token
      const decoded = verify(token, process.env.JWT_SECRET);
      // get user from token
      req.user = await User.findById(decoded.id).select('-password');

      next();
		} catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized');
    }
	}
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized');
  }
};