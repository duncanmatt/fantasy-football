import connectDB from "../../../../lib/connectDB";
import Player from "../../../../models/Player";

export default async function handler(req, res) {
  const {method} = req;

  await connectDB();

  switch(method) {
    case 'GET':
      try {
        // find all data
        const players = await Player.find({});
        res.status(200).json({success: true, data: players})
      } catch (error) {
        res.status(400).json({success: false});
      }
      break
    case 'POST':
      try {
        // create new model
        const player = await Player.create(
          req.body
        )
        res.status(201).json({success: true, data: player});
      } catch (error) {
        res.staus(400).json({success: false});
      }
      break
    default: 
      res.status(400).json({success: false});
      break
  }
}