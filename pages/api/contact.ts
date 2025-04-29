import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log('New contact form submission:', { name, email, message });

    return res.status(200).json({ success: true });
  }

  return res.status(405).end(); // Method Not Allowed
}
