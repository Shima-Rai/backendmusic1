# Docker Guide – Music Backend (Express.js)

This document explains how Docker is used in the **Music Backend** project and how to run the container.

---

## 1. Overview

* **Framework**: Express.js (Node.js)
* **Containerization**: Docker (production-ready build)
* **Runtime Port**: `5000`
* **Database**: JSON file-based (tracks.json)
* **Deployment Goal**: Single-command, portable deployment

This project is packaged as **one self-contained Docker image**.

---

## 2. Why Docker Is Used

Docker is used to:

* Ensure the same runtime environment on all machines
* Avoid local dependency and OS issues
* Package the app, Node.js runtime, and dependencies together
* Allow deployment without sharing source code

With Docker, the application runs the same on:

* Developer laptops
* Other team members' systems
* Cloud servers

---

## 3. Project Structure (Relevant to Docker)

Key Docker-related files in this project:

```
musics/
└─ backend/
   ├─ Dockerfile          # Defines how the image is built
   ├─ docker-compose.yml  # Orchestrates container services
   ├─ package.json        # Dependencies
   ├─ server.js          # Application entry point
   ├─ data/
   │  └─ tracks.json     # Music tracks data
   ├─ controllers/
   ├─ routes/
   ├─ services/
   └─ utils/
```

There is **only one service**: the Express.js backend application.

---

## 4. Build the Docker Image

Run this from the backend directory:

```bash
cd backend
docker build -t shima418/musics-backend:latest .
```

This command:

* Installs production dependencies using `npm ci --only=production`
* Copies the application code
* Creates a lightweight production image based on Node.js 18-alpine

---

## 5. Run the Container

### Option 1: Using Docker Run
```bash
docker run -d -p 5000:5000 --name musics-backend shima418/musics-backend:latest
```

### Option 2: Using Docker Compose
```bash
cd backend
docker-compose up -d
```

Access the application at:

```
http://localhost:5000
```

---

## 6. Useful Docker Commands

Check running container:

```bash
docker ps
```

View logs:

```bash
docker logs musics-backend
```

Or with Docker Compose:

```bash
docker-compose logs -f
```

Stop and remove container:

```bash
docker stop musics-backend
docker rm musics-backend
```

Or with Docker Compose:

```bash
docker-compose down
```

---

## 7. Push to Docker Hub

### 1. Login to Docker Hub
```bash
docker login
Username: shima418
Password: [access token]
```

### 2. Tag image with Docker Hub username
```bash
docker tag musics-backend:latest shima418/musics-backend:latest
```

### 3. Push image
```bash
docker push shima418/musics-backend:latest
```

---

## 8. Running on Another System

On any system with Docker installed:

```bash
docker pull shima418/musics-backend:latest
docker run -d -p 5000:5000 --name musics-backend shima418/musics-backend:latest
```

No project folder or source code is required.

Access the application at:

```
http://localhost:5000
```

---

## 9. Git Configuration

* **node_modules removed from tracking**: The `node_modules` directory has been removed from Git repository tracking (added to `.gitignore`)
* **Reason**: Dependencies should be installed in Docker containers, not committed to the repository
* **Benefit**: Reduces repository size and ensures consistent dependency installation across environments

---

## 10. Summary

* Docker is used to package and deploy the app consistently
* The project runs as a **single container**
* Docker Compose is available but optional (single service setup)
* The setup is production-ready and portable
* Image is available on Docker Hub: **shima418/musics-backend:latest**
