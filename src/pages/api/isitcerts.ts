import { NextApiRequest, NextApiResponse } from 'next'

export default function isitcerts(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ verdict: "Yes, It's Certificates" })
}
