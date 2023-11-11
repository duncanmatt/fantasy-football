const mongoose = require('mongoose');

const WaiverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    imgurl: {
      type: String,
    },
    position: {
      type: String,
      required: [true, 'Please add a position'],
    },
    num: {
      type: Number,
    },
    rost: {
      type: String,
    },
    team: {
      type: Array,
      required: [true, 'Please add a team'],
    },
    team_logo: {
      type: String,
    },
    team_abv: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { collection: 'waiver_winners' }
);

export default mongoose.models.Waiver || mongoose.model('Waiver', WaiverSchema);
