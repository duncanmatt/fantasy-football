const mongoose = require('mongoose');

const WrSchema = mongoose.Schema(
  {
    rank: {
      type: Number,
      required: [true, 'Please add a rank'],
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
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
    longest_rec: {
      type: Number,
    },
    rec_over_20: {
      type: Number,
    },
    rec_tds: {
      type: Number,
    },
    rush_atts: {
      type: Number,
    },
    rush_yds: {
      type: Number,
    },
    rush_tds: {
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
  { collection: 'wide_receivers' }
);

export default mongoose.models.Wr || mongoose.model('Wr', WrSchema);
