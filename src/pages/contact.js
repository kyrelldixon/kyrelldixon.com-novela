import React from "react";
import styled from "@emotion/styled";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact - Kyrell Dixon" />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <HeadingContainer>
            <Headings.h1>Contact Me</Headings.h1>
          </HeadingContainer>
          <ContactForm />
        </div>
      </Section>
    </Layout>
  )
}

const HeadingContainer = styled.div`
  margin: 100px 0;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

export default Contact;