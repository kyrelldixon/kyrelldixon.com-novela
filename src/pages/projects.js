import React from "react";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout"
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";

import ProjectsHero from "../components/Projects.Hero"

const Projects = () => {
  return (
    <Layout>
      <SEO pathname="/projects" />
      <ProjectsHero />
      <Section narrow>
        <div>This is a project</div>
      </Section>
    </Layout>
  )
}

export default Projects;