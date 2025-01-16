# L2-NodeJsWebApp
 

## Description

This is a simple web application built with Node.js. The app greets the user with a message depending on the time of day (Good morning, Good afternoon, or Good evening). It also shows how many days are left until the end of the year.

The application is designed to run on port `5454` by default.

## Features:
- Displays a time-based greeting (morning, afternoon, or evening).
- Shows the number of days remaining until the end of the year.

---

## How to Run the Application

### 1. **Running the Application Locally (Using Node.js)**

To run this application on your local machine, follow these steps:

## Prerequisites

To run this application, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **Git** (for cloning the repository)

#### Steps:
## Installation and Running Locally

1. **Clone the Repository**

   Open a terminal and clone the repository:
   ```bash
   git clone https://github.com/EnContacto/L2-NodeJsWebApp.git
   cd L2-NodeJsWebApp
2. **Install Dependencies**

   Install the necessary dependencies with:
   ```bash
   npm install
3. **Run the Application**

   Start the application with the following command:
   ```bash
   node app.js
  The application should now be accessible at `http://localhost:5454` in your web browser.
  
## **Running the Application with Docker**

You can also run this application using Docker for a containerized environment.
1. In the project’s root directory, open a terminal and run:
   ```bash
   docker build -t nodejs-webapp .

2. After the image is built, run the container using:
   ```bash
   docker run -p 5454:5454 nodejs-webapp
The application should now be accessible at `http://localhost:5454` in your web browser.

## Troubleshooting
- Ensure Docker is installed and running correctly if using the Docker setup.

- Make sure no other application is using port 5454 before running the server.
