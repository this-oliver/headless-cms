# Template for Headless CMS (Strapi)

Traditionally, if you wanted to build a website with dynamic content, you would need to implement a backend which consists of defining a data structure, creating a database and then implementing a backend that creates, reads, updates and deletes the data all while also authenticating and authorizing requests. You'd also have to create some sort of frontend to manage/administer the data (i.e. creating a blog post, editing a user profile, etc.). This is a lot of work especially if the end goal is to hand over the project to a non-technical.

A CMS (content management system) handles all the backend work for you (including the ui for managing the data) so you can focus on building the visual aspect of your project. Unlike traditional CMSs, a headless CMS does not come with a frontend. Instead, it provides an API that you can use to fetch the data and display it in your own frontend. This allows you to use any technology you want for the frontend (e.g. Vue, React, HTML + Vanilla JS, etc.) while still having a powerful backend to manage your data.

This template uses [Strapi](https://github.com/strapi/strapi) as the headless CMS for the following reasons:

- **Open Source**: Strapi is open source and free to use which means you can self-host it and have full control over your data.
- **Customizable**: Strapi is highly customizable and allows you to define your own data structure, create custom APIs, and even extend the admin panel.
- **Nodejs**: Strapi is built with Nodejs which allows you to leverage certain Nodejs features and libraries.
- **Community**: Strapi has a large and active community which means you can find help and resources easily.

## Usage

Pre-requisites:

- [Node.js](https://nodejs.org/en/download/) (`v22.14.0`)
- `npm` (pnpm does not work with Strapi)

To get started with a `development environment`, you can use the following commands:

```bash
# Install dependencies
npm install

# Build the admin panel
npm run build

# Start the Strapi application (listinging on port 1337)
npm run dev
```

For a `production environment`, you can use the following commands:

```bash
# Install dependencies
npm install --production

# Build the admin panel
npm run build

# Start the Strapi application (listening on port 1337)
npm run start
```

## Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.
