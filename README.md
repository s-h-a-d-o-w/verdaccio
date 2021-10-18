# e2e (+ testing library) experiment

All run on a 16 core machine.

## testing library

```
// 1 test
// real    0m4,159s

// 100x10 tests
// real    0m59,371s
```

## playwright

```
// 1 test
// real    0m1,687s

// 1000x1 tests
// 16 threads
// real    2m19,297s
// 32 threads
// real    1m55,101s

// 100x10 tests
// 16 threads
// real    3m19,304s
// 32 threads
// real    2m52,542s
```

## testcafe

```
// 1 test
// real    0m8,001s

// 1000x1 tests
// 16 threads
// real    4m42,192s

// 100x10 tests
// 16 threads
// real    4m36,743s
```

## [cypress](https://github.com/cypress-io/cypress/discussions/18380)

```
// 1 test
// real    0m5,349s

// 100x10 tests
// real    13m26,116s

// 10x10 (!!!) tests
// real    1m24,476s

// 100x1 (!!!) tests
// real    4m22,863s
```

![verdaccio logo](https://cdn.verdaccio.dev/readme/verdaccio@2x.png)

![verdaccio gif](https://cdn.verdaccio.dev/readme/readme-website.png)

# Version 6 (Development branch)

> Looking for Verdaccio 5? Check branch `5.x`.

[Verdaccio](https://verdaccio.org/) is a simple, **zero-config-required local private npm registry**.
No need for an entire database just to get started! Verdaccio comes out of the box with
**its own tiny database**, and the ability to proxy other registries (eg. npmjs.org),
caching the downloaded modules along the way.
For those looking to extend their storage capabilities, Verdaccio
**supports various community-made plugins to hook into services such as Amazon's s3,
Google Cloud Storage** or create your own plugin.

[![verdaccio (latest)](https://img.shields.io/npm/v/verdaccio/latest.svg)](https://www.npmjs.com/package/verdaccio)
[![verdaccio (downloads)](https://img.shields.io/npm/dy/verdaccio.svg)](https://www.npmjs.com/package/verdaccio)
[![docker pulls](https://img.shields.io/docker/pulls/verdaccio/verdaccio.svg?maxAge=43200)](https://verdaccio.org/docs/en/docker.html)
[![backers](https://opencollective.com/verdaccio/tiers/backer/badge.svg?label=Backer&color=brightgreen)](https://opencollective.com/verdaccio)
[![stackshare](https://img.shields.io/badge/Follow%20on-StackShare-blue.svg?logo=stackshare&style=flat)](https://stackshare.io/verdaccio)

[![discord](https://img.shields.io/discord/388674437219745793.svg)](http://chat.verdaccio.org/)
[![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/verdaccio/verdaccio/blob/master/LICENSE)
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/verdaccio/localized.svg)](https://crowdin.com/project/verdaccio)

[![Twitter followers](https://img.shields.io/twitter/follow/verdaccio_npm.svg?style=social&label=Follow)](https://twitter.com/verdaccio_npm)
[![Github](https://img.shields.io/github/stars/verdaccio/verdaccio.svg?style=social&label=Stars)](https://github.com/verdaccio/verdaccio/stargazers)

## Install

Install with npm:

```bash
npm install --global verdaccio@6-next
```

or

```bash
docker pull verdaccio/verdaccio:nightly-master
```

## Donations

Verdaccio is run by **volunteers**; nobody is working full-time on it. If you find this project to be useful and would like to support its development, consider making a donation - **your logo might end up in this readme.** 😉

**[Donate](https://github.com/sponsors/verdaccio)** 💵👍🏻 starting from _$1/month_ or just one single contribution.

## What does Verdaccio do for me?

### Use private packages

If you want to use all benefits of npm package system in your company without sending all code to the public, and use your private packages just as easy as public ones.

### Cache npmjs.org registry

If you have more than one server you want to install packages on, you might want to use this to decrease latency
(presumably "slow" npmjs.org will be connected to only once per package/version) and provide limited failover (if npmjs.org is down, we might still find something useful in the cache) or avoid issues like _[How one developer just broke Node, Babel and thousands of projects in 11 lines of JavaScript](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)_, _[Many packages suddenly disappeared](https://github.com/npm/registry-issue-archive/issues/255)_ or _[Registry returns 404 for a package I have installed before](https://github.com/npm/registry-issue-archive/issues/329)_.

### Link multiple registries

If you use multiples registries in your organization and need to fetch packages from multiple sources in one single project you might take advance of the uplinks feature with Verdaccio, chaining multiple registries and fetching from one single endpoint.

### Override public packages

If you want to use a modified version of some 3rd-party package (for example, you found a bug, but maintainer didn't accept pull request yet), you can publish your version locally under the same name. See in detail [here](https://verdaccio.org/docs/en/best#override-public-packages).

### E2E Testing

Verdaccio has proved to be a lightweight registry that can be
booted in a couple of seconds, fast enough for any CI. Many open source projects use verdaccio for end to end testing, to mention some examples, **create-react-app**, **mozilla neutrino**, **pnpm**, **storybook**, **alfresco** or **eclipse theia**. You can read more in dedicated article to E2E in our blog.

## Talks

### **Testing the integrity of your React components by publishing in a private registry - React Finland 2021**.

[![beerjscrb](https://cdn.verdaccio.dev/readme/react-finland-2021-jpicado.jpeg)](https://www.youtube.com/watch?v=bRKZbrlQqLY&t=16s&ab_channel=ReactFinland)

You might want to check out as well our previous talks:

- [BeerJS Cba Meetup No. 53 May 2021 - **Juan Picado**](https://www.youtube.com/watch?v=6SyjqBmS49Y&ab_channel=BeerJSCba)
- [Node.js Dependency Confusion Attacks - April 2021 - **Juan Picado\***](https://www.youtube.com/watch?v=qTRADSp3Hpo)
- [**OpenJS World 2020** about \*Cover your Projects with a Multi purpose Lightweight Node.js Registry - **Juan Picado\***](https://www.youtube.com/watch?v=oVCjDWeehAQ)
- [ViennaJS Meetup - Introduction to Verdaccio by **Priscila Olivera** and **Juan Picado**](https://www.youtube.com/watch?v=hDIFKzmoCa)
- [Open Source? trivago - Verdaccio (**Ayush** and **Juan Picado**) January 2020](https://www.youtube.com/watch?v=A5CWxJC9xzc)
- [GitNation Open Source Stage - How we have built a Node.js Registry with React - **Juan Picado** December 2019](https://www.youtube.com/watch?v=gpjC8Qp9B9A)
- [Verdaccio - A lightweight Private Proxy Registry built in Node.js | **Juan Picado** at The Destro Dev Show](https://www.youtube.com/watch?reload=9&v=P_hxy7W-IL4&ab_channel=TheDestroDevShow)

## Get Started

Run in your terminal

```bash
verdaccio
```

You would need set some npm configuration, this is optional.

```bash
$ npm set registry http://localhost:4873/
```

For one-off commands or to avoid setting the registry globally:

```bash
NPM_CONFIG_REGISTRY=http://localhost:4873 npm i
```

Now you can navigate to [http://localhost:4873/](http://localhost:4873/) where your local packages will be listed and can be searched.

> Warning: Verdaccio [does not currently support PM2's cluster mode](https://github.com/verdaccio/verdaccio/issues/1301#issuecomment-489302298), running it with cluster mode may cause unknown behavior.

## Publishing

#### 1. create a user and log in

```bash
npm adduser --registry http://localhost:4873
```

> if you use HTTPS, add an appropriate CA information ("null" means get CA list from OS)

```bash
$ npm set ca null
```

#### 2. publish your package

```bash
npm publish --registry http://localhost:4873
```

This will prompt you for user credentials which will be saved on the `verdaccio` server.

## Docker

Below are the most commonly needed information,
every aspect of Docker and verdaccio is [documented separately](https://www.verdaccio.org/docs/en/docker.html)

```
docker pull verdaccio/verdaccio:nightly-master
```

Available as [tags](https://hub.docker.com/r/verdaccio/verdaccio/tags/).

### Running verdaccio using Docker

To run the docker container:

```bash
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

Docker examples are available [in this repository](https://github.com/verdaccio/docker-examples).

## Compatibility

Verdaccio aims to support all features of a standard npm client that make sense to support in private repository. Unfortunately, it isn't always possible.

### Basic features

- Installing packages (npm install, npm upgrade, etc.) - **supported**
- Publishing packages (npm publish) - **supported**

### Advanced package control

- Unpublishing packages (npm unpublish) - **supported**
- Tagging (npm tag) - **supported**
- Deprecation (npm deprecate) - **supported**

### User management

- Registering new users (npm adduser {newuser}) - **supported**
- Change password (npm profile set password) - **supported**
- Transferring ownership (npm owner add {user} {pkg}) - not supported, _PR-welcome_
- Token (npm token) - **supported**

### Miscellany

- Searching (npm search) - **supported** (cli / browser)
- Ping (npm ping) - **supported**
- Starring (npm star, npm unstar, npm stars) - **supported**

### Security

- npm/yarn audit - **supported**

## Report a vulnerability

If you want to report a security vulnerability, please follow the steps which we have defined for you in our [security policy](https://github.com/verdaccio/verdaccio/security/policy).

## Special Thanks

Thanks to the following companies to help us to achieve our goals providing free open source licenses. Every company provides enough resources to move this project forward.

| Company      | Logo                                                                                                                            | License                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| JetBrains    | [![jetbrain](assets/thanks/jetbrains/logo.png)](https://www.jetbrains.com/)                                                     | JetBrains provides licenses for products for active maintainers, renewable yearly |
| Crowdin      | [![crowdin](assets/thanks/crowdin/logo.png)](https://crowdin.com/)                                                              | Crowdin provides platform for translations                                        |
| BrowserStack | [![browserstack](https://cdn.verdaccio.dev/readme/browserstack_logo.png)](https://www.browserstack.com/)                        | BrowserStack provides plan to run End to End testing for the UI                   |
| Netlify      | [![netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com/)                      | Netlify provides pro plan for website deployment                                  |
| Algolia      | [![algolia](https://cdn.verdaccio.dev/sponsor/logo/algolia/logo.png)](https://algolia.com/)                                     | Algolia provides search services for the website                                  |
| Docker       | [![docker](https://cdn.verdaccio.dev/sponsor/logo/docker/docker.png)](https://www.docker.com/community/open-source/application) | Docker offers unlimited pulls and unlimited egress to any and all users           |

## Maintainers

| [Juan Picado](https://github.com/juanpicado)                                   | [Ayush Sharma](https://github.com/ayusharma)                             | [Sergio Hg](https://github.com/sergiohgz)                                 |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| ![jotadeveloper](https://avatars3.githubusercontent.com/u/558752?s=120&v=4)    | ![ayusharma](https://avatars2.githubusercontent.com/u/6918450?s=120&v=4) | ![sergiohgz](https://avatars2.githubusercontent.com/u/14012309?s=120&v=4) |
| [@jotadeveloper](https://twitter.com/jotadeveloper)                            | [@ayusharma\_](https://twitter.com/ayusharma_)                           | [@sergiohgz](https://twitter.com/sergiohgz)                               |
| [Priscila Oliveria](https://github.com/priscilawebdev)                         | [Daniel Ruf](https://github.com/DanielRuf)                               |
| ![priscilawebdev](https://avatars2.githubusercontent.com/u/29228205?s=120&v=4) | ![DanielRuf](https://avatars3.githubusercontent.com/u/827205?s=120&v=4)  |
| [@priscilawebdev](https://twitter.com/priscilawebdev)                          | [@DanielRufde](https://twitter.com/DanielRufde)                          |

You can find and chat with then over Discord, click [here](http://chat.verdaccio.org) or follow them at _Twitter_.

## Who is using Verdaccio?

- [create-react-app](https://github.com/facebook/create-react-app/blob/master/CONTRIBUTING.md#customizing-e2e-registry-configuration) _(+86.2k ⭐️)_
- [Gatsby](https://github.com/gatsbyjs/gatsby) _(+49.2k ⭐️)_
- [Babel.js](https://github.com/babel/babel) _(+38.5k ⭐️)_
- [Vue CLI](https://github.com/vuejs/vue-cli) _(+27.4k ⭐️)_
- [Angular CLI](https://github.com/angular/angular-cli) _(+24.3k ⭐️)_
- [Uppy](https://github.com/transloadit/uppy) _(+23.8k ⭐️)_
- [bit](https://github.com/teambit/bit) _(+13k ⭐️)_
- [Aurelia Framework](https://github.com/aurelia/framework) _(+11.6k ⭐️)_
- [pnpm](https://github.com/pnpm/pnpm) _(+10.1k ⭐️)_
- [ethereum/web3.js](https://github.com/ethereum/web3.js) _(+9.8k ⭐️)_
- [NX](https://github.com/nrwl/nx) _(+6.1k ⭐️)_
- [webiny-js](https://github.com/webiny/webiny-js) _(+4.3k ⭐️)_
- [Mozilla Neutrino](https://github.com/neutrinojs/neutrino) _(+3.7k ⭐️)_
- [workshopper how to npm](https://github.com/workshopper/how-to-npm) _(+1k ⭐️)_
- [Amazon SDK v3](https://github.com/aws/aws-sdk-js-v3)
- [Amazon Encryption SDK for Javascript](https://github.com/aws/aws-encryption-sdk-javascript)

🤓 Don't be shy, you also can be in [the list](https://github.com/verdaccio/website/blob/master/docs/who-is-using.md).

## Open Collective Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/verdaccio#sponsor)]

[![sponsor](https://opencollective.com/verdaccio/sponsor/0/avatar.svg)](https://opencollective.com/verdaccio/sponsor/0/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/1/avatar.svg)](https://opencollective.com/verdaccio/sponsor/1/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/2/avatar.svg)](https://opencollective.com/verdaccio/sponsor/2/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/3/avatar.svg)](https://opencollective.com/verdaccio/sponsor/3/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/4/avatar.svg)](https://opencollective.com/verdaccio/sponsor/4/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/5/avatar.svg)](https://opencollective.com/verdaccio/sponsor/5/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/6/avatar.svg)](https://opencollective.com/verdaccio/sponsor/6/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/7/avatar.svg)](https://opencollective.com/verdaccio/sponsor/7/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/8/avatar.svg)](https://opencollective.com/verdaccio/sponsor/8/website)
[![sponsor](https://opencollective.com/verdaccio/sponsor/9/avatar.svg)](https://opencollective.com/verdaccio/sponsor/9/website)

## Open Collective Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/verdaccio#backer)]

[![backers](https://opencollective.com/verdaccio/backers.svg?width=890)](https://opencollective.com/verdaccio#backers)

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

[![contributors](https://opencollective.com/verdaccio/contributors.svg?width=890&button=true)](../../graphs/contributors)

### FAQ / Contact / Troubleshoot

If you have any issue you can try the following options, do no desist to ask or check our issues database, perhaps someone has asked already what you are looking for.

- [Blog](https://verdaccio.org/blog/)
- [Donations](https://github.com/sponsors/verdaccio)
- [Reporting an issue](https://github.com/verdaccio/verdaccio/issues/new/choose)
- [Running discussions](https://github.com/verdaccio/verdaccio/issues?q=is%3Aissue+is%3Aopen+label%3Adiscuss)
- [Chat](https://discord.gg/7qWJxBf)
- [Logos](https://verdaccio.org/docs/en/logo)
- [Docker Examples](https://github.com/verdaccio/verdaccio/tree/master/docker-examples)
- [FAQ](https://github.com/verdaccio/verdaccio/discussions/categories/q-a)

### License

Verdaccio is [MIT licensed](https://github.com/verdaccio/verdaccio/blob/master/LICENSE)

The Verdaccio documentation and logos (excluding /thanks, e.g., .md, .png, .sketch) files within the /assets folder) is
[Creative Commons licensed](https://creativecommons.org/licenses/by/4.0/).
