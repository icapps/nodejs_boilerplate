# NodeJS Boilerplate

A boilerplate project for new RESTful APIs using Node.js and Express

## Installation and Documentation

### Prerequisites

- [Node](https://nodejs.org/en/)
- [NVM](https://github.com/nvm-sh/nvm)
- [Docker](https://www.docker.com/products/docker-desktop)

### Project dependencies

```bash
# We use npm for this project
# Install project dependencies
$ npm install
```

### Running the server

Before starting the server, we need to have a filled in `.env`.
See `.env.example` for the required values.

```bash
# Build the server
$ npm run build
$ npm run start
```

## Scripts

### Building and running

```bash
# Removes previous build
$ npm run clean

# Removes previous build and create new one
$ npm run build

# Start server
$ npm run start

# Start application in watch mode
$ npm run serve
```

### Database

```bash
# General
# Reset the database (rollbacks, migrates and seeds the database)
$ npm run db:reset
```

### Formatting + linting

```bash
# Check codebase for linting or code formatting errors
$ npm run lint
$ npm run format:check
```

### Docker

```bash
# Create (and start) docker containers
$ docker compose up -d

# Start docker containers
$ docker compose start

# Stop running containers
$ docker compose stop
```

### Testing

```bash
# Run tests
$ npm run test
```

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE) file for details


