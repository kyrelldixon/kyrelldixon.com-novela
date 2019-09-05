import React from "react";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";

const Home = () => {

  return (
    <Layout>
      <SEO pathname="/" />
      <Section narrow>
        <h1>Hi! My name is Kyrell Dixon, but you can call me Kai.</h1>
        <h2>
          I'm a full stack developer. I develop software products, teach,
          and travel. I also like to write about what I learn.
        </h2>
      </Section>
    </Layout>
  );
}

export default Home;