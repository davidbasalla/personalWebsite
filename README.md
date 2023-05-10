This is the repo for my personal website [davidbasalla.com](davidbasalla.com). It uses GatsbyJS, the static site generator for generating static html pages which get hydrated with React in the browser and Contentful to manage the content.

### Develop

- use `yarn install`
- run `yarn dev` to run local dev server

### Deploy

- build the site with `yarn build`
- Log into AWS S3 and manually delete files and copy over new files
- OR see the AWS section for syncing via the command line

### Contentful

Data is pulled from Contentful 'automatically' when running `yarn build` or `yarn dev`.

### AWS

The site is hosted as a static site on S3.

Get contents of the bucket with:

```
aws s3 ls davidbasalla.com
```

To sync files from local dir to S3 bucket:

```
aws s3 sync public/ s3://davidbasalla.com --delete
```
