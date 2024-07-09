# MamaHub

## About
MamaHub is a comprehensive online platform designed to support mothers at all stages of their journey - prenatal, postnatal, and aspiring mothers. Our mission is to create a nurturing community where mothers can connect, share experiences, and access valuable resources for raising children in today's challenging world.

## Table of Contents
1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
7. [API Documentation](#api-documentation)
8. [Frontend Structure](#frontend-structure)
9. [Database Schema](#database-schema)
10. [Testing](#testing)
11. [Deployment](#deployment)
12. [Contributing](#contributing)
13. [Support](#support)
14. [Privacy](#privacy)
15. [License](#license)
16. [Contact](#contact)

## Features
- **Discussion Forums**: Themed spaces for various topics related to motherhood and child-rearing.
- **Expert Advice**: Regular contributions from pediatricians, psychologists, and experienced mothers.
- **Resource Library**: Curated articles, videos, and podcasts on parenting topics.
- **Event Calendar**: Online and local meetups, webinars, and workshops.
- **Private Messaging**: Secure one-on-one communication between users.
- **Milestone Tracking**: Tools to record and celebrate children's growth and development.

## Technology Stack
- **Backend**: Node.js with Express.js
- **Frontend**: Vue.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API**: RESTful API

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/addymwenda12/MamaHub.git
```
2. Install backend dependencies:
   ```bash
   cd server

   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd client

   npm install
   ```
## Configuration

1. Backend configuration:
- Create a `.env` file in the `server` directory
- Add the following environment variables:
  ```
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/MamaHub
  JWT_SECRET=your_jwt_secret_here
  ```

2. Frontend configuration:
- Update the API base URL in `client/src/config.js` if necessary

## Running the Application

1. Start the MongoDB service on your machine

2. Run the backend server:
   ```bash
   cd backend

   npm run start
   ```
3. In a new terminal, run the frontend development server:
   ```bash
   cd server

   npm run start
   ```
4. Access the application at `http://localhost:8080`

## API Documentation
API documentation is available at `http://localhost:3000/api-docs` when the backend server is running.

## Frontend Structure
The Vue.js frontend is organized as follows:
- `src/components`: Reusable Vue components
- `src/views`: Page-level Vue components
- `src/router`: Vue Router configuration
- `src/store`: Vuex store for state management
- `src/assets`: Static assets like images and global styles

## Database Schema
Key MongoDB collections:
- Users
- Discussions
- Messages
- Resources
- Events

Detailed schema definitions can be found in `server/models/`.

## Testing
- Run backend tests: `cd server && npm run test`
- Run frontend tests: `cd client && npm run test:unit`

## Deployment
Deployment instructions for various platforms:

1. Heroku:
- Install the Heroku CLI
- Run `heroku create`
- Set environment variables: `heroku config:set NODE_ENV=production`
- Push to Heroku: `git push heroku main`

2. DigitalOcean:
- Create a droplet
- SSH into your droplet
- Clone the repository and follow the installation steps
- Use PM2 to manage the Node.js process

Detailed deployment guides for other platforms can be found in `DEPLOYMENT.md`.

## Contributing
We welcome contributions from the community. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.


## Privacy
We take user privacy seriously. Please review our [Privacy Policy](PRIVACY.md) for information on how we protect and use your data.

## License
MamaHub is licensed under the [MIT License](LICENSE.md).
om.

Join MamaHub today and be part of a community that understands and supports the beautiful journey of motherhood!
