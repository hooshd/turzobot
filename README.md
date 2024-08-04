# Turzobot

![Lumic Readme Banner](https://lumic-public.s3.ap-southeast-2.amazonaws.com/lumic-readme-banner.png?=1)

## Description

Welcome to **Turzobot**, a unique project that allows you to clone your friends by creating an API in Google Sheets. This repository provides a simple yet powerful way to manage and manipulate data directly from Google Sheets, enabling you to replicate the information of your friends effortlessly. With Turzobot, you can harness the power of Google Sheets as a backend, making it easy to store, retrieve, and manage data without the need for complex server setups.

### Main Components

- **Google Sheets API Integration**: Seamlessly connect to Google Sheets to read and write data.
- **Data Manipulation Functions**: Functions to clone and manage data entries, allowing for easy duplication of friend profiles.
- **User-Friendly Interface**: A straightforward setup that makes it easy for anyone to get started with cloning data.

## File Tree Structure


- README.md                # Documentation file providing an overview of the project.
- src/                     # Source directory containing the main codebase.
  - index.js               # Entry point of the application, responsible for initializing the API.
  - config/                # Configuration files for the application.
    - sheetsConfig.js      # Configuration for Google Sheets API integration.
  - controllers/           # Logic for handling requests and responses.
    - dataController.js    # Manages data operations, including cloning and retrieving friend profiles.
  - utils/                 # Utility functions to support the application.
    - apiHelper.js         # Helper functions for making API calls to Google Sheets.
- package.json             # NPM package file containing project dependencies and scripts.
- .env                     # Environment variables for sensitive information like API keys.


### Purpose of Each File

- **README.md**: Provides an overview and documentation for the project.
- **src/index.js**: Initializes the application and sets up the API endpoints.
- **src/config/sheetsConfig.js**: Contains configuration settings for connecting to the Google Sheets API.
- **src/controllers/dataController.js**: Implements the logic for cloning friend profiles and managing data.
- **src/utils/apiHelper.js**: Contains utility functions for making API requests to Google Sheets.

## Features

- **User Authentication**: Secure user registration and login processes using JWT (JSON Web Tokens) for session management.
- **Data Management**: Efficient handling of user data with a robust database connection.
- **User Profile Management**: Users can easily access and manage their profiles.
- **Middleware Protection**: Routes are secured with middleware that verifies user authentication.
- **Logging and Error Handling**: Built-in logging and centralized error handling.
- **Scalability**: Structured to facilitate easy integration and scalability.
- **Modern Technology Stack**: Utilizes popular JavaScript frameworks and libraries.

## Prerequisites

Before you begin, ensure you have met the following requirements:

### NPM Dependencies

You will need the following NPM packages installed:

- `express`
- `mongoose`
- `jsonwebtoken`
- `bcrypt`
- `dotenv`
- `cors`
- `morgan`

### Environment Variables

Set the following environment variables in your `.env` file:

- `DATABASE_URL`: The connection string for your database.
- `JWT_SECRET`: A secret key used for signing JWT tokens.
- `PORT`: The port on which the server will run (default is usually 3000).
- `NODE_ENV`: The environment in which the application is running (e.g., development, production).

### Environment Setup

1. Ensure you have Node.js and NPM installed. Download them from [Node.js official website](https://nodejs.org/).
2. Clone the repository:
   bash
   git clone https://github.com/hooshd/turzobot.git
   
3. Navigate to the project directory:
   bash
   cd turzobot
   

## Installation

To install the necessary dependencies and set up the environment, follow these steps:

1. **Install NPM Dependencies**:
   bash
   npm install
   

2. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project directory and add the required environment variables:
   
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   NODE_ENV=development
   

3. **Start the Application**:
   After setting up the environment variables, start the application:
   bash
   npm start
   

Now your application should be up and running! You can access it at `http://localhost:3000` (or the port you specified).

## Usage

This section provides an overview of how to use the Turzobot application.

### Input Parameters

- **User Registration**
  - `username` (String): Desired username.
  - `password` (String): User password.
  - `email` (String): User email address.

- **User Login**
  - `username` (String): Username for login.
  - `password` (String): Password for login.

- **Get User Profile**
  - `userId` (String): ID of the user whose profile is requested.

### Expected Output

- **User Registration**
  - Success: Confirmation message and user ID.
  - Error: Error message indicating the reason for failure.

- **User Login**
  - Success: JWT token for authenticated sessions.
  - Error: Error message indicating invalid credentials.

- **Get User Profile**
  - Success: User profile data.
  - Error: Error message if the user is not found.

### Test Data

- **User Registration**
  json
  {
    "username": "testuser",
    "password": "securePassword123",
    "email": "testuser@example.com"
  }
  

- **User Login**
  json
  {
    "username": "testuser",
    "password": "securePassword123"
  }
  

- **Get User Profile**
  json
  {
    "userId": "60d5ec49f1a2c8b1f8c8e4a1"
  }
  

### Code Examples

- **User Registration**
  
  const axios = require('axios');

  axios.post('http://localhost:PORT/api/auth/register', {
    username: 'testuser',
    password: 'securePassword123',
    email: 'testuser@example.com'
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response.data);
  });
  

- **User Login**
  
  axios.post('http://localhost:PORT/api/auth/login', {
    username: 'testuser',
    password: 'securePassword123'
  })
  .then(response => {
    console.log('Token:', response.data.token);
  })
  .catch(error => {
    console.error(error.response.data);
  });
  

- **Get User Profile**
  
  axios.get('http://localhost:PORT/api/user/profile/60d5ec49f1a2c8b1f8c8e4a1', {
    headers: {
      'Authorization': `Bearer YOUR_JWT_TOKEN`
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response.data);
  });
  

## Contributing

We welcome contributions to the Turzobot project! To contribute, please follow these guidelines:

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone Your Fork**:
   bash
   git clone https://github.com/YOUR_USERNAME/turzobot.git
   
3. **Create a Branch**:
   bash
   git checkout -b feature/YourFeatureName
   
4. **Make Changes**: Implement your changes and commit them with a clear message:
   bash
   git commit -m "Add feature: YourFeatureName"
   
5. **Push Changes**:
   bash
   git push origin feature/YourFeatureName
   
6. **Create a Pull Request**: Go to the original repository and create a pull request from your branch.

Please ensure your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

We would like to thank all contributors and the open-source community for their support and contributions.

## Author

This project is a product of [Lumic.ai](https://lumic.ai).

---

Thanks for reading this far! Why did the developer go broke? Because he used up all his cache!