import React from "react";
import styled from "@emotion/styled";
import Image from "@narative/gatsby-theme-novela/src/components/Image";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

// TODO: Update to use Gatsby Image
import twitter from "../../assets/twitter-clone-desktop.jpg";

const ProjectsList = () => {
  return (
    <List>
      <ListItem>
        <Project />
      </ListItem>
    </List>
  );
}

const ExternalLink = ({ to, children }) => (
  <StyledExternalLink href={to} target="_blank" rel="noopener noreferrer">{children}</StyledExternalLink>
)

const Project = () => (
  // TODO: Extract project info into props
  <ProjectContainer>
    <ProjectName>Twitter Clone</ProjectName>
    <ProjectDescription>A full stack Twitter clone with an Elixir REST API handling the back end and React
      on the front end. Handles user authentication, viewing timeline, creating and deleting tweets, and following users.
    </ProjectDescription>
    <Divider />
    <ProjectActionsContainer>
      <ProjectAction>
        <ExternalLink to="https://twitter-cloned.netlify.com">Visit Website</ExternalLink>
      </ProjectAction>
      <ProjectAction>
        <ExternalLink to="https://github.com/kyrelldixon/twitter_clone">Source Code</ExternalLink>
      </ProjectAction>
    </ProjectActionsContainer>
    <ProjectImage src={twitter} alt="Twitter clone landing page." />
    <MainAction>
      <ExternalLink to="https://twitter-cloned.netlify.com">Visit Website</ExternalLink>
    </MainAction>
  </ProjectContainer>
);

export default ProjectsList;

const StyledExternalLink = styled.a`
  color: #fff;
  
  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${p => p.theme.colors.accent};
  }

`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  color: white;

  ${mediaqueries.desktop`
    width: 100%;
    text-align: center;
  `}
`;
const List = styled.ul`
  list-style: none;
  position: relative;
  z-index: 1;
`;
const ListItem = styled.li`
  display: flex;
  background-color: #1da1f3;
  border-radius: 5px;
  margin: 20px 0;
  padding: 60px;

  ${mediaqueries.desktop`
    padding: 0;
  `}
`;
const Divider = styled.hr`
  border:none;
	width: 140px;
	margin-top: 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  margin-bottom: 30px;

  ${mediaqueries.desktop`
    display: none;
  `}
`;
const ProjectName = styled.h3`
  font-size: 24px;
  padding-bottom: 20px;

  ${mediaqueries.desktop`
    padding-top: 40px;
    padding-bottom: 30px;
  `}
`;
const ProjectDescription = styled.p`
  margin-bottom: 30px;
  line-height: 1.5;
  color: rgba(255,255,255,0.8);
  min-height: 100px;

  ${mediaqueries.desktop`
    display: none;
  `}
`;
const ProjectActionsContainer = styled.div`
  display: flex;

  ${mediaqueries.desktop`
    display: none
  `}
`;
const ProjectAction = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
`;
const MainAction = styled.div`
  display: none;

  ${mediaqueries.desktop`
    display: block;
    background-color: #1d93dd;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
  `}
`

const ProjectImage = styled(Image)`
  display: none;
  max-width: 400px;
  height: auto;
  
  ${mediaqueries.desktop`
    display: block;
    align-self: center;
    margin-bottom: 30px;
  `}

  ${mediaqueries.tablet`
    max-width: 300px;
  `}

  ${mediaqueries.phone`
    max-width: 250px;
  `}
`;
