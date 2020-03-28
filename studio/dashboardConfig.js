export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7fb2e172cb4117758921e2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z7tea83e',
                  apiId: '54dbce3c-5b8d-4098-b289-b563b67c0dd2'
                },
                {
                  buildHookId: '5e7fb2e1bbc752cfeace2b34',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5jxhnjm4',
                  apiId: '7437268c-08a1-4058-b7f6-a82831211387'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielhageman/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5jxhnjm4.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
