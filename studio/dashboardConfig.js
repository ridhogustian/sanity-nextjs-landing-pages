export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61ca697ceb07cb85d9095c04',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8firrjre',
                  apiId: '0bc036fd-dc60-4603-a806-e31753210fd7'
                },
                {
                  buildHookId: '61ca697c2738da89d66fddd3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-txtt7uny',
                  apiId: 'c2a5ea0f-f251-4f48-8912-8ee1ca842a00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ridhogustian/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-txtt7uny.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
