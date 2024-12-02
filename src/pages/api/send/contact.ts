
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const DESTINATION_EMAIL = "info@comejuupremieracademy.com";
const FROM_EMAIL = "contactsuspage@comejuupremieracademy.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (req.method === "POST") {
      const { name, phone, email, message } = req.body;

      const emailBody = `Hello Comejuu Premier Academy, My name is ${name}, my phone number is ${phone}, my email is ${email}.\n\n${message.trim()}`;

      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: DESTINATION_EMAIL,
        replyTo: email,
        subject: "New Contact Request",
        text: emailBody,
      });

      if (data) {
        return res.status(200).json({ message: "Email sent successfully" });
      }

      if (error) {
        return res.status(500).json({ message: "Internal server error" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error, please try again" });
  }
}
