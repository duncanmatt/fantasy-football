const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    imgUrl: {
      type: String,
    },
    imgurl: {
      type: String,
    },
    position: {
      type: String,
      required: [true, 'Please add a position'],
    },
    team: {
      type: Array,
      required: [true, 'Please add a team'],
    },
    move: {
      type: Array,
      required: false,
    },
  },
  { collection: 'players' }
);

export default mongoose.models.Player || mongoose.model('Player', PlayerSchema);
