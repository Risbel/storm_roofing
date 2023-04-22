import emailService from "../../server/email";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const body = req.body;

    const result = await emailService.sendServiceMail({
      data: {
        email: body.email,
        name: body.name,
        service: body.service,
        message: body.message,
      },
    });

    return res.status(200).json({ message: "Sent!" });
  }

  return res.status(400).json({ message: "Method not allowed" });
}
