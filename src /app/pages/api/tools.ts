import { NextApiRequest, NextApiResponse } from 'next';

const tools = [
  { type: "chainsaw", code: "CHNS", brand: "Stihl" },
  { type: "ladder", code: "LADW", brand: "Werner" },
  { type: "jackhammer", code: "JAKD", brand: "DeWalt" },
  { type: "jackhammer", code: "JAKR", brand: "Ridgid" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(tools);
}
