import React from "react";
import styled from "@emotion/styled";

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
  <ProjectContainer>
    <ProjectName>Twitter Clone</ProjectName>
    <ProjectDescription>A full stack Twitter clone with an Elixir REST API handling the back end and React
      on the front end. Handles user authentication, viewing timeline, creating and deleting tweets, and following users.
    </ProjectDescription>
    <Divider />
    <ProjectActionsContainer>
      <ProjectAction>
        <ExternalLink to="https://twitter-cloned.netlify.com">Website</ExternalLink>
      </ProjectAction>
      <ProjectAction>
        <ExternalLink to="https://github.com/kyrelldixon/twitter_clone">Source Code</ExternalLink>
      </ProjectAction>
    </ProjectActionsContainer>
  </ProjectContainer>
)

const StyledExternalLink = styled.a`
  &:visited {
    color: inherit;
  }
`;
const ProjectContainer = styled.div`
  width: 400px;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  background-color: #a9cee8;
  border-radius: 5px;
  margin: 20px 0;
  padding: 60px;
`;
const Divider = styled.hr`
  border:none;
	width: 140px;
	margin-top: 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  margin-bottom: 30px;
`;
const ProjectName = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;
const ProjectDescription = styled.p`
  margin-bottom: 30px;
  line-height: 1.5;
  color: ${p => p.theme.colors.grey};
  min-height: 100px;
`;
const ProjectActionsContainer = styled.div`
  display: flex;
`;
const ProjectAction = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
`;

export default ProjectsList;