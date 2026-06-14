# URL Shortener

This is a small URL shortener built with Node.js, Express, and plain HTML, CSS, and JavaScript. I made it to understand how a frontend can send data to a backend API and how Express routes can be used to create redirects.

When a user enters a long URL, the server generates a six-character ID using Nano ID. The original URL is stored in a JavaScript object, and the app returns a shorter link such as `http://localhost:3000/aB3xP9`. Opening that link redirects the user to the original address.

## Technologies Used

- Node.js
- Express
- Nano ID
- HTML, CSS, and JavaScript

## How to Run

1. Clone or download the repository.
2. Open the project folder in a terminal.
3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open `http://localhost:3000` in a browser.

## How It Works

The browser sends the entered URL to the `POST /shorten` endpoint. The server creates a unique ID, stores the URL in memory, and returns the shortened address. When the shortened address is opened, the `GET /:shortId` route finds the original URL and redirects to it.

## Note

This project uses in-memory storage instead of a database. The saved URLs are cleared whenever the server is restarted. For a production version, the URLs would need to be stored in a persistent database.
