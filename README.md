# SME Health Check

This project is a simple application that checks the health of Small and Medium Enterprises (SMEs). It includes a Next.js client and a NestJS server.

## Features

- **Company Registration**: Users can register a company.
- **Document Upload**: Users can upload relevant documents for the company.
- **Submitted Companies**: Users can view all submitted companies and their details.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following installed:
- Node.js
- npm

### Setup

#### Server

1. **Navigate to the server directory**:
    ```bash
    cd server
    ```

2. **Install NPM packages**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the server directory.
    - Add relevant environment variables (e.g., database connection).

4. **Start the server**:
    ```bash
    npm run start
    ```

#### Client

1. **Navigate to the client directory**:
    ```bash
    cd client
    ```

2. **Install NPM packages**:
    ```bash
    npm install
    ```

3. **Start the React development server**:
    ```bash
    npm run dev
    ```

This will launch the application in your default web browser on `http://localhost:3000`.

## Using the Application

- **Register a Company**: First, navigate to the company registration section.
- **Upload Documents**: After entering the company information, upload the necessary documents.
- **View Submitted Companies**: You can view all submitted companies from the "Submitted Companies" section.

## Built With

- [Next.js](https://nextjs.org/) - The web framework used for the client
- [React](https://reactjs.org/) - The JavaScript library used for the client
- [Node.js](https://nodejs.org/) - Server Environment
- [NestJS](https://nestjs.com/) - Server framework for Node.js
