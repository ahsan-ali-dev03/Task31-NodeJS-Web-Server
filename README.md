# Task 31 - Creating a Simple Web Server with Node.js

## Project Overview

This project demonstrates how to create a simple web server using Node.js and the built-in HTTP module.

The server handles multiple routes and serves different HTML pages based on the requested URL.

## Features

- Node.js HTTP web server
- Port 3000
- Home route
- About route
- Contact route
- Custom 404 error page
- HTTP status codes
- CSS styling
- Responsive web pages
- Error handling for invalid routes

## Routes

| Route | Description |
|---|---|
| `/home` | Home page |
| `/about` | About page |
| `/contact` | Contact page |
| Invalid route | Custom 404 page |

## Technologies Used

- Node.js
- JavaScript
- HTML5
- CSS3
- Node.js HTTP module

## Project Structure

```text
Task31-NodeJS-Web-Server/
│
├── public/
│   ├── home.html
│   ├── about.html
│   ├── contact.html
│   ├── 404.html
│   └── style.css
│
├── server.js
└── README.md