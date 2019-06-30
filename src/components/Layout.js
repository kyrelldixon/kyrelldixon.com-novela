import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

const Layout = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(false);
    }, 100);
  }, []);
    
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Coming Soon' },
          { name: 'keywords', content: 'site, web' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
