import React from "react";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";

import ProjectsHero from "../components/Projects/Projects.Hero";
import ProjectsList from "../components/Projects/Projects.List";

const Projects = () => {
  return (
    <Layout>
      <SEO pathname="/projects" />
      <ProjectsHero />
      <Section narrow>
        <ProjectsList />
      </Section>
    </Layout>
  )
}

export default Projects;