
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const DESTINATION_EMAIL = "admissions@comejuupremieracademy.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (req.method === "POST") {
      const { name, phone, email, message } = req.body;

      const emailBody = `My name is ${name} and my phone number is ${phone}.\n\n${message.trim()}`;

      await resend.emails.send({
        from: email,
        to: DESTINATION_EMAIL,
        subject: "New Contact Request",
        text: emailBody,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
