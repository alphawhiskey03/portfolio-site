import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../common/styles";
import {
  FormContainer,
  FormContent,
  FormTitle,
  FormInput,
  FormLabel,
  FormButton,
  Form,
  FormTextArea,
} from "./TouchStyles";
import { BiMessageAdd } from "react-icons/bi";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Touch = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailResponse = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    const formData = new FormData(form.current);
    const jsonData = Object.fromEntries(formData.entries());
    const sanityResponse = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
        },
        body: JSON.stringify({
          mutations: [
            {
              create: {
                _type: "enquiries",
                from_name: jsonData.from_name,
                from_email: jsonData.from_email,
                message: jsonData.message,
              },
            },
          ],
        }),
      }
    );
    const data = await sanityResponse.json();
    if ((sanityResponse.status === 200, emailResponse.status === 200)) {
      alert(
        "Thank you for your query! I've received your message and will get back to you shortly"
      );
    } else {
      alert(
        "Oops! Netowrk error.Don't worry though, your submission is recorder and will get back to you shortly"
      );
    }
    setLoading(false);
  };
  return (
    <Section id="contact">
      <SectionTitle>Get in touch</SectionTitle>
      <SectionText>
        Fill in your queries. I'll get back to you asap!
      </SectionText>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)} ref={form}>
          <FormTitle>
            <BiMessageAdd size="5rem" />
          </FormTitle>
          <FormContent>
            <FormInput required name="from_name" />
            <FormLabel>Name</FormLabel>
          </FormContent>
          <FormContent>
            <FormInput name="from_email" type="email" required />
            <FormLabel>Email</FormLabel>
          </FormContent>
          <FormContent style={{ paddingBottom: 80 }}>
            <FormTextArea required name="message"></FormTextArea>
            <FormLabel>Query</FormLabel>
            <br />
          </FormContent>
          <FormButton
            type="submit"
            value={loading ? "Submitting..." : "Submit"}
          />
        </Form>
      </FormContainer>

      <SectionDivider colorAlt />
    </Section>
  );
};

export default Touch;
