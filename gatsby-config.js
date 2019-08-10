module.exports = {
  siteMetadata: {
    title: `Kyrell Dixon`,
    name: `Kyrell Dixon`,
    siteUrl: `https://www.kyrelldixon.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [{
        name: `twitter`,
        url: `https://twitter.com/kyrelldixon`,
      },
      {
        name: `github`,
        url: `https://github.com/kyrelldixon`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/kyrell.dixon`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/kyrell-dixon/`,
      },
    ],
  },
  plugins: [{
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyrell Dixon`,
        short_name: `Kyrell Dixon`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
