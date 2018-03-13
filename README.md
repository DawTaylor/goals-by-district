# Eokoe Goals by District challenge

## About

This app was built using VueJS over NuxtJS to take advantage of server side rendering features.

This app uses axios do fetch data from the provided REST endpoint. It also uses Vuex actions to fetch these data, so the Vuex store is the single source of truth.

To improve user experience on this app, the data is cached on browser's IndexDB using LocalForage abstraction library.

To improve productivity Pug and Stylus were used as HTML and CSS pre-processors, respectively.

It was also built using CSS flexbox and CSS grid features.

## How to run

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
