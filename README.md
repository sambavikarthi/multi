# Multi-Container Application Stack 🚀

This is a production-ready, multi-container architecture orchestrated with **Docker Compose**, featuring automated CI/CD via **Jenkins** and real-time monitoring through **Prometheus** and **Grafana**.

## ✅ Deliverables Status
- [x] **GitHub Repository Ready**: Clean code structure with proper configuration files.
- [x] **Dockerized Backend**: Optimized Node.js environment with persistent DB connectivity.
- [x] **PostgreSQL Integration**: Secure relational database service.
- [x] **Jenkins Pipeline**: Declarative `Jenkinsfile` for automated build and deployment.
- [x] **Monitoring Stack**: Prometheus & Grafana with active targets.

## 📁 Project Structure
- `backend/`: Node.js Express API and Dockerfile.
- `prometheus/`: Configuration for metric scraping.
- `docker-compose.yml`: Main orchestration file.
- `Jenkinsfile`: Automated deployment script.

## 🛠️ Service Overview
| Service | Internal Port | External Port | Description |
| :--- | :--- | :--- | :--- |
| **Backend API** | 3000 | 3000 | Express server (Operational Message enabled) |
| **PostgreSQL** | 5432 | 5432 | Database with persistent volume `pg-data` |
| **Prometheus** | 9090 | 9090 | Monitoring engine scraping `/metrics` |
| **Grafana** | 3000 | 3001 | Visual Dashboard (Modern UI) |

## 🚀 Quick Start
To get everything running fast:
```powershell
docker compose up -d --build
```

### 🔗 Live Endpoints
- **Application Health**: [http://localhost:3000/health](http://localhost:3000/health)
- **Database Status**: [http://localhost:3000/db-check](http://localhost:3000/db-check)
- **Monitoring UI**: [http://localhost:9090](http://localhost:9090)
- **Visual Dashboards**: [http://localhost:3001](http://localhost:3001) (User: `admin` / Pass: `admin`)

---
*Created by Antigravity for your Multi-Container Application Project.*
