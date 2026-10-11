# JWT + MongoDB API

Express and TypeScript app for user registration/login and admin-managed products, with a Hebrew browser interface.

## Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and set `MONGODB_URI` to your local MongoDB or Atlas connection string and a long random `JWT_SECRET` (at least 32 characters).
3. Run `npm run dev`; the API listens on port 4000 by default.
4. Run `npm run build` to type-check and compile to `dist`.
5. Open `http://localhost:4000/` to browse the catalog, register or log in. Admins can manage products in the browser.

Never commit `.env`. New registrations always receive the `user` role. Promote an account to `admin` only through a trusted administrative process (for example, directly in MongoDB); the public registration endpoint does not accept a role.

## Postman

Import `postman/JWT MongoDB API.postman_collection.json`. Run Register to create a uniquely named user, then Login to save its token. To test product writes, promote that account to `admin` in MongoDB, run Login again, then run Create, Update, and Delete product.

## API routes

| Method | Endpoint | Access |
| --- | --- | --- |
| POST | `/users/register` | Public |
| POST | `/users/login` | Public |
| GET | `/users/profile` | Authenticated |
| GET | `/users`, `/users/:id` | Admin |
| PUT, DELETE | `/users/:id` | Admin |
| GET | `/products`, `/products/:id` | Public |
| POST, PUT, DELETE | `/products`, `/products/:id` | Admin |

Passwords are bcrypt-hashed and never returned. The API does not let registration or normal user updates change a role. Product creation records the authenticated creator.
