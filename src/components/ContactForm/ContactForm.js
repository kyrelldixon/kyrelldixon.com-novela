// Code modified from https://github.com/narative/narative.co/blob/master/src/sections/contact/Contact.ContactForm.tsx

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Formik, Form as FormikForm, Field } from "formik";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import Heading from "@narative/gatsby-theme-novela/src/components/Headings";

import Form from "../Form";
import Button from "../Button";
import ButtonArrow from "../Button/Button.Arrow";

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = `Hi, I'm Kai. What’s your name?`
  }

  if (!values.email) {
    errors.email = "This one's important!"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Forgot a character?'
  }

  if (!values.details) {
    errors.details = 'Could be anything, really.'
  }
  if (values.details.length > 289) {
    errors.details = 'Short and sweet, please!'
  }

  return errors
}

const initialValues = {
  name: '',
  email: '',
  details: '',
}

const ContactForm = () => {
  const baseDelay = 0
  const [animation, setAnimation] = useState('')

  useEffect(() => {
    setAnimation('start')
  }, [animation])

  const newLine = (count) => {
    const lineBreak = '%0D%0A';
    return lineBreak.repeat(count)
  }
  const sendMail = (values) => {
    const { name, details } = values;
    const myEmail = 'kyrell@studentdevcoach.com';
    const subject = `I'd like to work with you - ${name}`;
    const body = `Hi Kyrell,${newLine(2)}${details}`;
    const formattedBody = body.replace('\n', newLine(1))

    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${formattedBody}`;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    sendMail(values);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledFormikForm>
          <FormSection
            animation={animation}
            delay={baseDelay + 350}
          >
            <FormHeader morePadding>Tell me about you</FormHeader>
            <span>
              <Field
                component={Form.Text}
                label="your name"
                name="name"
              />
              <Field
                component={Form.Text}
                label="email address"
                name="email"
              />
            </span>
          </FormSection>
          <FormSection
            animation={animation}
            delay={baseDelay + 610}
          >
            <FormHeader>Your Project Details</FormHeader>
            <Field
              component={Form.TextArea}
              label="what would you like to work on"
              name="details"
              rows={1}
            />
          </FormSection>
          <ButtonContainer animation={animation} delay={baseDelay + 800}>
            <ButtonArrow
              isSubmitting={isSubmitting}
              color="black"
              type="submit"
              text="Submit"
            />
          </ButtonContainer>
          <MobileButtonContainer
            animation={animation}
            delay={baseDelay + 800}
          >
            <Button
              isSubmitting={isSubmitting}
              text="Submit"
            />
          </MobileButtonContainer>
        </StyledFormikForm>
      )}
    </Formik>
  );
}

const StyledFormikForm = styled(FormikForm)`
  align-self: flex-end;
  position: relative;
  padding-bottom: 10rem;
  margin: 0 auto;
  z-index: 99999;

  ${mediaqueries.desktop_large`
    margin-left: 0;
    width: 100%;
    padding: 0 4rem 5rem;
  `};
  ${mediaqueries.desktop`
    margin: 0 auto;
    padding: 0 0 5rem;
  `};
  ${mediaqueries.phablet`
    width: 100%;
  `};
`;

const fadeUpAnimation = p => css`
  transition: opacity 0.5s linear ${p.delay}ms,
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.9) ${p.delay}ms;
  opacity: ${(p.animation ? 1 : 0)};
  transform: ${(p.animation ? 'translateY(0)' : 'translateY(20px)')};
`

const FormHeader = styled(Heading.h2)`
  color: ${p => p.theme.colors.primary};
  width: 265px;
  padding-right: ${p => (p.morePadding ? '100px' : '76px')};
  ${mediaqueries.tablet`
    width: 100%;
    padding: 0;
    margin-bottom: 5px;
    color: ${p => p.theme.colors.grey};
  `};
`;

const FormSection = styled.div`
  display: flex;
  margin-bottom: ${p => (p.spacing === 'large' ? '7rem' : '2.5rem')};
  ${mediaqueries.tablet`
    margin-bottom: ${p => (p.spacing === 'large' ? '2rem' : '1rem')};
    flex-direction: column;
  `};
  ${fadeUpAnimation}
`;

const ButtonContainer = styled.div`
  margin-left: 265px;
  padding-top: 35px;
  ${fadeUpAnimation}
  ${mediaqueries.tablet`
    display: none;
  `};
`

const MobileButtonContainer = styled.div`
  display: none;
  ${fadeUpAnimation}
  ${mediaqueries.tablet`
    display: block;
  `};
`

export default ContactForm;