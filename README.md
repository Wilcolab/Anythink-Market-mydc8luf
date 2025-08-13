Python & Node.js Servers
This project contains two servers: a FastAPI server implemented in Python and a Node.js server. They both provide routes for managing a task list and are configured to run simultaneously using Docker Compose.

Project Structure
The project has the following files and directories:

python-server/src/main.py: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

python-server/src/__init__.py: An empty file that marks the src directory as a Python package.

python-server/requirements.txt: This file lists the Python dependencies required for the FastAPI server.

python-server/Dockerfile: This file is used to build a Docker image for the Python FastAPI server. It specifies the base image, copies the source code, installs dependencies, and sets the command to run the server.

node-server/src/index.js: This file contains the implementation of the Node.js server, which has been translated from the Python server.

node-server/package.json: This file contains the Node.js project metadata and lists its dependencies.

node-server/Dockerfile: This file is used to build a Docker image for the Node.js server. It specifies the base image, copies the source code, installs dependencies, and sets the command to run the server.

docker-compose.yml: This file is used to define and run the multi-container Docker application. It specifies the services for both the Python and Node.js servers, their configurations, and how they interact.

Getting Started
To run both the Python and Node.js servers using Docker, follow these steps:

Build and Start Containers: Run the following command in your terminal:

Shell

docker compose up 
This command will build the Docker images for both the Python and Node.js servers and start the containers as defined in the docker-compose.yml file.

Access the Servers:

The Python server is now running and accessible at port 8000.

The Node.js server is also running and accessible at port 8001.

API Routes
Both the Python and Node.js servers provide the following API routes:

POST /tasks: Adds a task to the task list. The request body should contain the task details.

GET /tasks: Retrieves the task list.
