# 🎵 Smart Playlist Matcher API

A music recommendation API that intelligently matches songs based on **mood** and **BPM (beats per minute)**. Built with Express.js, this backend service analyzes user preferences and returns a ranked list of tracks that best match the given criteria.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Docker Deployment](#docker-deployment)
- [Example Request/Response](#example-requestresponse)

---

## 🎯 Overview

The **Smart Playlist Matcher** is a backend API that recommends music tracks based on:

1. **Mood** - emotional tone (happy, sad, energetic, calm)
2. **BPM** - tempo of the music (beats per minute)

The system uses a **scoring algorithm** to rank tracks, prioritizing:
- Exact mood matches
- Similar BPM ranges
- Overall compatibility score

---

## ✨ Features

- 🎭 **Mood-based filtering** - Match songs to emotional states
- 🎼 **BPM matching** - Find tracks with similar tempo
- 📊 **Smart scoring algorithm** - Ranks results by relevance
- 🚀 **RESTful API** - Simple JSON-based interface
- 🐳 **Docker ready** - Containerized for easy deployment
- 📦 **Lightweight** - JSON-based data storage

---

## 🧠 How It Works

### Scoring Algorithm

Each track is scored based on:

1. **Mood Match** (+50 points)
   - Exact mood match adds 50 points to the score

2. **BPM Proximity** (+30 points bonus)
   - Tracks within 8% of the target BPM get a 30-point bonus

3. **BPM Difference Penalty** (-1 point per BPM difference)
   - Larger BPM differences reduce the score

**Formula:**
```
Score = (Mood Match: 50 or 0) + (BPM Close: 30 or 0) - |BPM Difference|
```

**Example:**
- Input: `mood: "happy"`, `bpm: 120`
- Track: `mood: "happy"`, `bpm: 118`
- Score: 50 (mood match) + 30 (within 8%) - 2 (BPM diff) = **78 points**

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Data Storage**: JSON files
- **Containerization**: Docker
- **Architecture**: MVC pattern (Model-View-Controller)

---

## 📁 Project Structure

```
musics/
├─ backend/
│  ├─ server.js                      # Application entry point
│  ├─ package.json                   # Dependencies
│  ├─ Dockerfile                     # Docker image configuration
│  ├─ docker-compose.yml             # Docker orchestration
│  ├─ controllers/
│  │  └─ recommend.controller.js     # Request handling logic
│  ├─ services/
│  │  ├─ recommend.service.js        # Recommendation business logic
│  │  └─ scoreTrack.js              # Scoring algorithm
│  ├─ routes/
│  │  └─ recommend.routes.js        # API route definitions
│  ├─ data/
│  │  └─ tracks.json                # Music tracks database
│  └─ utils/
│     └─ scoreTrack.js              # Scoring utilities
├─ Docker.md                         # Docker documentation
└─ README.md                         # This file
```

---

## 📦 Installation

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Docker** (optional, for containerized deployment)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd musics/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Verify it's running**
   ```
   🚀 Server running at http://localhost:5000
   ```

---

## 🚀 Usage

### Run Locally

```bash
cd backend
node server.js
```

The server will start on **port 5000** (or use `PORT` environment variable).

### Run with Docker

See [Docker.md](Docker.md) for detailed Docker instructions.

**Quick start:**
```bash
cd backend
docker-compose up -d
```

---

## 🌐 API Endpoints

### Base URL
```
http://localhost:5000
```

### 1. Health Check
**GET** `/`

**Response:**
```
🎵 Smart Playlist Matcher API is running
```

### 2. Get Recommendations
**POST** `/api/recommend`

**Request Body:**
```json
{
  "mood": "happy",
  "bpm": 120
}
```

**Parameters:**
- `mood` (string, required) - Mood filter: `"happy"`, `"sad"`, `"energetic"`, `"calm"`
- `bpm` (number, required) - Target BPM (beats per minute)

**Response:**
```json
{
  "input": {
    "mood": "happy",
    "bpm": 120
  },
  "recommendations": [
    {
      "id": 1,
      "title": "Sunny Beats",
      "artist": "DJ Nova",
      "mood": "happy",
      "bpm": 120,
      "score": 80
    },
    {
      "id": 5,
      "title": "Happy Ride",
      "artist": "Smile Crew",
      "mood": "happy",
      "bpm": 118,
      "score": 78
    }
  ]
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Mood and BPM are required"
}
```

---

## 🐳 Docker Deployment

The project includes Docker support for easy deployment.

### Build and Run

```bash
# Build the image
docker build -t shima418/musics-backend:latest .

# Run the container
docker run -d -p 5000:5000 --name musics-backend shima418/musics-backend:latest
```

### Pull from Docker Hub

```bash
docker pull shima418/musics-backend:latest
docker run -d -p 5000:5000 --name musics-backend shima418/musics-backend:latest
```

For complete Docker documentation, see **[Docker.md](Docker.md)**.

---

## 📝 Example Request/Response

### Using cURL

```bash
curl -X POST http://localhost:5000/api/recommend \
  -H "Content-Type: application/json" \
  -d '{"mood": "energetic", "bpm": 130}'
```

### Using JavaScript (fetch)

```javascript
fetch('http://localhost:5000/api/recommend', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ mood: 'energetic', bpm: 130 })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

### Sample Response

```json
{
  "input": {
    "mood": "energetic",
    "bpm": 130
  },
  "recommendations": [
    {
      "id": 3,
      "title": "Energy Rush",
      "artist": "Pulse",
      "mood": "energetic",
      "bpm": 135,
      "score": 75
    }
  ]
}
```

---

## 📊 Available Tracks

The system currently includes 5 sample tracks:

| ID | Title | Artist | Mood | BPM |
|----|-------|--------|------|-----|
| 1 | Sunny Beats | DJ Nova | happy | 120 |
| 2 | Midnight Tears | Luna | sad | 70 |
| 3 | Energy Rush | Pulse | energetic | 135 |
| 4 | Peaceful Waves | Zen Flow | calm | 60 |
| 5 | Happy Ride | Smile Crew | happy | 118 |

To add more tracks, edit `backend/data/tracks.json`.

---

## 🔧 Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port |
| `NODE_ENV` | `development` | Environment mode |

### Modify Port

```bash
PORT=3000 node server.js
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**shima418**

---

## 🙏 Acknowledgments

- Express.js community
- Node.js team
- Docker documentation

---

**Built with ❤️ for music lovers**
