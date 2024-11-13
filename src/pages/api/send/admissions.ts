import { ApplicationFormData } from "@/components/admissions/ApplicationForm";
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
      const {
        parentName,
        studentName,
        studentGrade,
        dayOrBoarding,
        parentRelationship,
        parentPhoneNumber,
        parentEmailAddress,
      } = req.body as ApplicationFormData;

      const emailText = `
        Hi, my name is ${parentName}. I would like to enroll my child, ${studentName}, who is in grade ${studentGrade} and will be a ${dayOrBoarding} student. 
        I am the ${parentRelationship} and can be reached at ${parentPhoneNumber} or via email at ${parentEmailAddress}.
      `;

      const { data, error } = await resend.emails.send({
        from: parentEmailAddress,
        to: DESTINATION_EMAIL,
        subject: "New Admission Request",
        text: emailText.trim(),
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
