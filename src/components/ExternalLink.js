import React from "react";

const ExternalLink = ({ to, children, className }) => (
  <a href={to} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default ExternalLink;