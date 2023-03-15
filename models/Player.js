const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name'],
	},
	position: {
		type: String,
		required: [true, 'Please add a position'],
	},
	team: {
		type: String,
		required: [true, 'Please add a team'],
	},
});

export default mongoose.models.Player || mongoose.model('Player', PlayerSchema);
