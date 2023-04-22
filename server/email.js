import EmailService from "../services/email";

const emailService = new EmailService({
  senderEmail: process.env.SYSTEM_EMAIL_ACCOUNT,
  senderPass: process.env.SYSTEM_EMAIL_PASS,
  service: "gmail",
  receiverEmail: process.env.RECEIVER_EMAIL_ACCOUNT,
});

export default emailService;
