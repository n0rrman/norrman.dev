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

export const SweEmail = ({ name, email, message, topic, URL }: EmailProps) => {
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
                      {topic} bekräftelse!
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
                  Hej {name}
                  <Text className="inline text-xl text-cyan-500">!</Text>
                </Heading>

                <Text className="inline text-lg">
                  Tack för ditt meddelande! Detta är ett automatiskt svar för
                  att bekräfta att meddelandet kommit fram. Inom 24 timmar får
                  du ett manuellt svar.
                </Text>
                <Text className="text-sm">Ditt meddelande:</Text>
                <pre className="rounded-xl bg-gray-600/10 -mt-3 p-4 w-full">
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

export default SweEmail;
