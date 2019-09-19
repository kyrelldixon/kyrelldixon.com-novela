module.exports = {
  siteMetadata: {
    title: `Kyrell Dixon`,
    name: `Kyrell Dixon`,
    siteUrl: `https://www.kyrelldixon.com`,
    description: `My insights into tech, traveling, and business while learning in public.`,
    hero: {
      heading: `My insights into tech, traveling, and business while learning in public.`,
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
        basePath: "/articles",
        mailchimp: true,
        sources: {
          local: true,
          contentful: false,
        },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146399883-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: 'https://gmail.us3.list-manage.com/subscribe/post?u=2d60e20754af6d5ea8e855f91&amp;id=90e1334ab6', // add your MC list endpoint here; see plugin repo for instructions
      },
    },
  ],
};
