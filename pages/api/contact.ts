import type { NextApiRequest, NextApiResponse } from 'next';
import useWeb3Forms from "@web3forms/react";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Web3Forms integration
    const accessKey = "25ba7728-97a7-49d9-8e3f-45eb61aebffb"; // Replace with your Web3Forms access key

    const { submit } = useWeb3Forms({
      access_key: accessKey,
      settings: {
        from_name: "GraphicWorks",
        subject: "New Contact Message from GraphicWorks Website",
      },
      onSuccess: (msg, data) => {
        console.log("Form submitted successfully:", { msg, data });
        return res.status(200).json({ success: true, message: msg });
      },
      onError: (msg, data) => {
        console.error("Form submission error:", { msg, data });
        return res.status(500).json({ success: false, message: msg });
      },
    });

    // Submit the form data
    submit({ name, email, message });

    return; // Response handled in Web3Forms callbacks
  }

  return res.status(405).end(); // Method Not Allowed
}