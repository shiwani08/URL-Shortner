# URL Shortener

## 📌 Description
A simple URL shortening service that takes a long URL and returns a unique, shortened URL.  
Built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features
- Shorten long URLs into unique, easy-to-share links.
- Redirect users from the shortened link to the original URL.
- Keep track of all URLs stored in the database.

---

## 📡 API Endpoints

| Method | Endpoint     | Description                                                        | Request Body Example                                                                 | Response Example                                                                                                      |
|--------|-------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| GET    | `/`         | Default route to check if the API is running.                      | None                                                                                 | `"Welcome to the URL Shortener API"`                                                                                  |
| GET    | `/all`      | Fetch all stored URLs from the database.                           | None                                                                                 | `[ { "_id": "...", "originalUrl": "...", "shortId": "abc1234", "shortUrl": "http://shiwani.url/abc1234", "clicks": 0 } ]` |
| GET    | `/:shortId` | Redirect to the original URL associated with the provided shortId. | None                                                                                 | Redirects to the original URL (e.g., `https://example.com/very/long/url`)                                             |
| POST   | `/shorten`  | Create a shortened URL from the provided original URL.              | `{ "originalUrl": "https://example.com/very/long/url" }`                             | `{ "shortUrl": "http://shiwani.url/abc1234" }`                                                                         |

