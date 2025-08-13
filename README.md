Node.js Server
This project contains a Node.js server that provides routes for managing a task list.

Project Structure
The project has the following files and directories:

node-server/src/index.js: This file contains the implementation of the Node.js server.

node-server/package.json: This file contains the Node.js project metadata and lists its dependencies.

node-server/Dockerfile: This file is used to build a Docker image for the Node.js server. It specifies the base image, copies the source code, installs dependencies, and sets the command to run the server.

docker-compose.yml: This file is used to define and run the Node.js server container.

Getting Started
To run the Node.js server using Docker, follow these steps:

Build and Start Container: Run the following command in your terminal:

Shell

docker compose up --build
This command will build the Docker image for the Node.js server and start the container as defined in the docker-compose.yml file.

Access the Server:

The Node.js server is now running and accessible at port 8001.

API Routes
The Node.js server provides the following API routes:

POST /tasks: Adds a task to the task list. The request body should contain the task details.

GET /tasks: Retrieves the task list.
