import {NextApiRequest, NextApiResponse} from 'next';
import type { Profile, ResponseError } from '../../../../interfaces';
import User from '../../../../models/User';

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Profile | ResponseError>
) {
  const {query} = req;
  const {username} = query;
  const user = await User.findOne({username});

  return user
    ? res.status(200).json(user)
    : res.status(404).json({message: `${username} not found`})
}