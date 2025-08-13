# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: Implements the FastAPI server with two routes for adding and retrieving tasks.
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package.
- `python-server/requirements.txt`: Lists the dependencies required for the FastAPI server.
- `python-server/Dockerfile`: Builds a Docker image for the FastAPI server, installs dependencies, and sets the startup command.
- `node-server/src/index.js`: Implements the Node.js server, providing routes for managing tasks.
- `node-server/package.json`: Lists the dependencies and scripts for the Node.js server.
- `node-server/Dockerfile`: Builds a Docker image for the Node.js server and sets the startup command.
- `docker-compose.yml`: Defines and runs multi-container Docker applications, specifying service configurations and dependencies.
