const mongoose = require('mongoose');

const QbSchema = mongoose.Schema(
  {
    rank: {
      type: Number,
      required: [true, 'Please add a rank'],
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    completions: {
      type: Number,
    },
    pass_atts: {
      type: Number,
    },
    comp_pct: {
      type: Number,
    },
    pass_yds: {
      type: Number,
    },
    yds_per_pass: {
      type: Number,
    },
    pass_tds: {
      type: Number,
    },
    interceptions: {
      type: Number,
    },
    sacks: {
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
  },
  { collection: 'quarter_backs' }
);

export default mongoose.models.Qb || mongoose.model('Qb', QbSchema);
