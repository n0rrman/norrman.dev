import * as React from "react";

import {
  Html,
  Head,
  Body,
  Tailwind,
  Section,
  Heading,
  Container,
  Img,
  Text,
  Row,
  Column,
  Hr,
  Link,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
  topic: string;
  URL: string;
}

export const EngEmail = ({ name, email, message, topic, URL }: EmailProps) => {
  return (
    <Tailwind>
      <div key={name}>
        <Html lang="en">
          <Head />
          <Body className="text-slate-950 font-sans bg-[#e1e8fc] mx-auto">
            <Container className="mx-auto">
              <Section>
                <Row className="">
                  <Column className="">
                    <Heading className="block text-3xl -mb-2 ">
                      Norrman
                      <Text className="inline text-4xl text-cyan-500">.</Text>
                      dev
                    </Heading>
                    <Heading className="block text-lg">
                      {topic} confirmation!
                    </Heading>
                  </Column>
                  <Column className="">
                    <Img
                      className="ml-auto"
                      alt=""
                      src={`${URL}/email/logo.jpg`}
                      width="80"
                      height="80"
                    />
                  </Column>
                </Row>
              </Section>
              <Section className="w-full">
                <Img
                  className="block mx-auto"
                  alt=""
                  src={`${URL}/email/email.png`}
                  height="260"
                  width="410"
                />
                <Heading className="text-xl">
                  Hello {name}
                  <Text className="inline text-xl text-cyan-500">!</Text>
                </Heading>
                <Text className="inline text-lg">
                  Thank you for reaching out! This is an automated confirmation
                  message to let you know that we have received your{" "}
                </Text>
                <Text className="inline text-lg lowercase">{topic}</Text>
                <Text className="inline text-lg">
                  . You will receive a manual response to your message within 24
                  hours.
                </Text>
                <Text className="text-sm">Your message:</Text>
                <pre className="rounded-xl bg-gray-600/10 -mt-3 p-4 text-wrap whitespace-pre-line">
                  {message}
                </pre>
                <Row>
                  <Column className="w-full"></Column>
                  <Column className="w-max block">
                    {name} ({email})
                  </Column>
                </Row>
              </Section>
              <Section className="text-right pt-10">
                <Hr className="h-[1px] bg-slate-950" />
                <Text className="text-xs">
                  © 2024 norrman.dev. All rights reserved.
                </Text>
                <Text className="text-xs -mt-3">
                  Image designed by vector juice on{" "}
                  <Link href="https://www.freepik.com">
                    https://www.freepik.com
                  </Link>
                </Text>
              </Section>
            </Container>
          </Body>
        </Html>
      </div>
    </Tailwind>
  );
};

export default EngEmail;
