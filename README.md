# Headless CMS

> [!NOTE]
> This repository is a opinionated wrapper for [Strapi](https://strapi.io), a headless CMS.

A headless CMS is a content management system that provides a platform for managing content and a API for consuming that content in any frontend application. Unlike traditional CMSs, you are not tied to a specific frontend stack, allowing you to use any technology you want for the frontend (e.g. Vue, React, HTML + Vanilla JS, etc.) while still having a powerful backend to manage your data.

The purpose of this repository is to provide the following features:

| Feature           | Description                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Opinionated setup | A personal template for quickly setting up a headless CMS.                                                               |
| Container image   | Strapi does not offer a container image, so this template provides a Dockerfile to build an opinionated container image. |
| Security          | Security scans are performed on the template to ensure vulnerabilities are identified and addressed continuously.        |
| Open-source       | This template uses open-source and community-supported projects to ensure longevity and flexibility.                     |

## Getting Started

> [!NOTE]
> You'll need to setup the environment variables in a `.env` file before running the application. A sample [`.env.example`](.env.example) file is provided in the repository. To generate the environment variables, run `npm run token`.

You can run this template as a Node.js application or as a containerized service.

### Node.js

> [!NOTE]
> Strapi does not support odd numbered Nodejs versions (e.g. `v22.x.x` is supported but `v21.x.x` is not). Currently, only `v20` and `v22` are supported.

**Requirements:**

- Node.js (`v22.14.0`)
- npm (pnpm is not supported)

```bash
npm install           # Install dependencies
npm run build         # Build the admin panel
npm run dev           # Start Strapi in development mode (http://localhost:1337)
# or
npm run start         # Start Strapi in production mode (http://localhost:1337)
```

### Docker

**Requirements:**

- Docker
- Docker Compose (optional)

**Quick start:**

```bash
# Build the Docker image
docker build -t cms .
# Run the Docker container
docker run --name cms \
-p 1337:1337 \
--env-file .env \
-v ./.database:/app/.database \
-v ./.uploads:/app/public/uploads \
-v ./scr:/app/src \
cms
```

**With Docker Compose:**

```bash
docker-compose up
```

## Usage

The Strapi instance enables to key features:

1. **Define content structure**: You can define the structure of your content (content types, fields, relationships) using the admin panel.
2. **Manage content**: You can create, read, update, and delete content using the admin panel or the API.

### Defining Content Structure

Once the Strapi instance is running, you can access the admin panel at `http://localhost:1337/admin`. To define the structure of the content in the CMS, you will need to:

- create an admin user
- run the Strapi instance in `development` mode
- use the admin panel to create content types, fields, and relationships

The defined content will be stored in [`src/`](src/) directory, which is mounted as a volume in the Docker container. This allows you to version control your content structure and share it with others.

### Creating Content

Once you have defined your content structure, you can start creating content (this does not require the Strapi instance to be in `development` mode). The content will be stored in [`.database/`](.database/) directory, which is also mounted as a volume in the Docker container. This allows you to version control your content and share it with others. Media files (images, videos, etc.) will be stored in [`public/uploads/`](public/uploads/) directory, which is also mounted as a volume in the Docker container.

## FAQ

### What is a Headless CMS?

A traditional CMS manages both backend (data, logic) and frontend (UI), making it harder to decouple content from presentation.

```mermaid
flowchart TD
    subgraph TC["Traditional CMS"]
        style TC fill:#f9f,stroke:#333,stroke-width:2px
        DB[Database]
        CMS[CMS Backend]
        UI[UI Frontend]
        DB --> CMS --> UI --> Reader1((Reader))
    end
```

A headless CMS, like Strapi, only manages the backend and exposes content via an API. You can use any frontend technology to consume the API.

```mermaid
flowchart TD
    subgraph HC["Headless CMS"]
        style HC fill:#bbf,stroke:#333,stroke-width:2px
        DB[Database]
        CMS[CMS Backend]
        DB --> CMS --> API[API]
    end
        API --> Web[Vue Web App] --> Reader2((Reader))
        API --> Web2[React Web App] --> Reader3((Reader))
        API --> Mobile[Mobile App] --> Reader4((Reader))
```

In summary: A headless CMS lets you manage content in one place and deliver it anywhere, using any frontend framework you prefer.
