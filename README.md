This is the repo for my personal website [davidbasalla.com](davidbasalla.com). It uses GatsbyJS, the static site generator for generating static html pages which get hydrated with React in the browser and Contentful to manage the content.

### Develop

- use `yarn install`
- run `yarn dev` to run local dev server

### Deploy

- build the site with `yarn build`
- log into AWS S3 and manually delete files and copy over new files

### Contentful

Data is pulled from Contentful 'automatically' when running `yarn build` or `yarn dev`.
