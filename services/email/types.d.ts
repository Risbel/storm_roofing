export type SendPlainMailParams = {
  subject: string;
  text: string;
  to?: string;
};

export type SendServiceMailParams = {
  to?: string;
  data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };
};

export type EmailServiceCtor = {
  service: string;
  senderEmail: string;
  senderPass: string;
  receiverEmail?: string;
};
