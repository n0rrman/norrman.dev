"use strict";

import { Resend } from "resend";

import SweMail from "@/emails/swe-mail";
import EngMail from "@/emails/eng-mail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(
  topic: string,
  name: string,
  email: string,
  msg: string,
  language: string
) {
  let mail;
  if (language === "eng") {
    mail = <EngMail name={name} topic={topic} email={email} message={msg} />;
  } else {
    mail = <SweMail name={name} topic={topic} email={email} message={msg} />;
  }

  const { data, error } = await resend.batch.send([
    {
      from: "Norrman.dev <noreply@norrman.dev>",
      to: process.env.ADMIN_EMAIL || "email@norrman.dev",
      subject: `Norrman.dev: ${topic} confirmation`,
      react: mail,
    },
    {
      from: "Norrman.dev <noreply@norrman.dev>",
      to: email,
      subject: `Norrman.dev: ${topic} confirmation`,
      react: mail,
    },
  ]);

  console.log(data);

  if (error) {
    throw error;
  }
}
