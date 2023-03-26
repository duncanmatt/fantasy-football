// FOR PROFILE PAGE

export default async function handler(req, res) {

	const user = {
		id: req.user._id,
		username: req.user.username,
	};

	res.status(200).json(user);
}

