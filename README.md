# My Example Node (Express + Mongoose)

![GitHub deployments](https://img.shields.io/github/deployments/MrNithi/node-express-my-example-app/production?label=vercel&logo=vercel)

## Table of Contents

- [Commands](#commands)
- [API Documentation](#api-documentation)

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

## API Documentation

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens

**User routes**:\
`GET /v1/users` - get user\
`PATCH /v1/users` - update user\
`DELETE /v1/users` - delete user

**Article routes**:\
`POST /v1/articles` - create an article\
`GET /v1/articles` - get all article\
`GET /v1/articles/:articleId` - get article\
`PATCH /v1/articles/:articleId` - update article\
`DELETE /v1/articles/:articleId` - delete article

## Inspirations

- [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)

## License

[MIT](LICENSE)
