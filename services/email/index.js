import nodemailer from "nodemailer";

import { SERVICE_CONTENT_TEMPLATE } from "./templates";

class EmailService {
  /**
   * @typedef {import('./types').SendPlainMailParams} SendPlainMailParams
   * @typedef {import('./types').SendServiceMailParams} SendServiceMailParams
   * @typedef {import('./types').EmailServiceCtor} EmailServiceCtor
   * The email will be sent from SYSTEM_EMAIL_ACCOUNT to RECEIVER_EMAIL_ACCOUNT
   */

  /**
   * @type {import('nodemailer').Transporter}
   */
  #transporter;

  /**
   * @type {string}
   */
  #senderEmail;

  /**
   * @type {string}
   */
  #senderPass;

  /**
   * @type {string}
   */
  #receiverEmail;

  /**
   * @param {EmailServiceCtor}
   */
  constructor({ senderEmail, senderPass, receiverEmail, service }) {
    this.#senderEmail = senderEmail;
    this.#senderPass = senderPass;
    this.#receiverEmail = receiverEmail;

    this.#transporter = nodemailer.createTransport({
      service,
      auth: {
        user: this.#senderEmail,
        pass: this.#senderPass,
      },
    });
  }

  /**
   * Send email in plain/text format
   * @type {SendPlainMailParams}
   * @returns {Promise<unknown>}
   */
  sendPlainMail = ({ subject, text, to }) => {
    return new Promise((resolve, reject) => {
      this.#transporter.sendMail(
        {
          from: this.#senderEmail,
          to: to ?? this.#receiverEmail,
          subject,
          text,
        },
        (err, info) => {
          if (err) {
            return reject(err);
          }
          return resolve(info);
        }
      );
    });
  };

  /**
   * @param {string} template
   * @param {Object} keyValues
   * @returns {string}
   */
  #parseTemplate(template, keyValues) {
    let parsedTemplate = template;
    for (const [key, value] of Object.entries(keyValues)) {
      const reg = new RegExp(`{{${key}}}`, "g");
      parsedTemplate = parsedTemplate.replaceAll(reg, value || `{{${value}}}`);
    }

    return parsedTemplate;
  }

  /**
   * Send email in HTML format
   * @param {SendServiceMailParams}
   * @returns {Promise<unknown>}
   */
  sendServiceMail = async ({ to, data }) => {
    return this.#transporter.sendMail({
      from: this.#senderEmail,
      to: to ?? this.#receiverEmail,
      subject: "Service Request",
      html: this.#parseTemplate(SERVICE_CONTENT_TEMPLATE, {
        ...data,
        date: new Date(),
      }),
    });
  };
}

export default EmailService;
