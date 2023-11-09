const mongoose = require('mongoose');

const RbSchema = mongoose.Schema(
  {
    rank: {
      type: Number,
      required: [true, 'Please add a rank'],
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    rush_atts: {
      type: Number,
    },
    rush_yds: {
      type: Number,
    },
    yds_per_rush: {
      type: Number,
    },
    longest_rush: {
      type: Number,
    },
    rush_over_20: {
      type: Number,
    },
    rush_tds: {
      type: Number,
    },
    receptions: {
      type: Number,
    },
    targets: {
      type: Number,
    },
    rec_yds: {
      type: Number,
    },
    yds_per_rec: {
      type: Number,
    },
    rec_tds: {
      type: Number,
    },
    fumbles: {
      type: Number,
    },
    games: {
      type: Number,
    },
    fpts: {
      type: Number,
    },
    fpts_per_game: {
      type: Number,
    },
    rost: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: false,
    },
    target_share: {
      type: Number,
    },
    catch_rate: {
      type: Number,
    },
  },
  { collection: 'running_backs' }
);

export default mongoose.models.Rb || mongoose.model('Rb', RbSchema);
