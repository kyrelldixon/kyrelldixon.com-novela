module.exports = {
  siteMetadata: {
    title: `Kyrell Dixon`,
    name: `Kyrell Dixon`,
    siteUrl: `https://www.kyrelldixon.com`,
    description: `Software, traveling, and doing both at the same time.`,
    hero: {
      heading: `Software, traveling, and doing both at the same time.`,
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
