# Best Cars Dealership — Full Stack Application Development Capstone

**Repository Name:** fullstack-developer-capstone

**Project Name:** Best Cars Dealership (Full Stack Car Dealership Web Application)

---

## 📋 Project Overview

Best Cars Dealership is a full-stack web application developed as the final capstone project for the **IBM Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, view dealership details and customer reviews, post their own reviews, and analyze review sentiment — all backed by a Django REST backend, a React frontend, MongoDB for dealership data, SQLite/Django ORM for user and review data, and IBM Cloud Code Engine for deployment.

## 🛠️ Technology Stack

- **Backend:** Python, Django, Django REST Framework, Node.js/Express microservices
- **Frontend:** React, React Router, HTML5, CSS3
- **Databases:** SQLite (Django ORM), MongoDB (dealership data)
- **Sentiment Analysis:** IBM Watson NLU (Natural Language Understanding)
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Cloud Code Engine (containerized with Docker)
- **Version Control:** Git / GitHub

## ✨ Features

- User registration, login, and logout (session-based authentication)
- Home page listing all car dealerships with state-based filtering
- Dealer detail page displaying dealer information and customer reviews
- Post Review page with sentiment analysis of review text
- Static pages: About Us and Contact Us
- Admin panel (Django admin) for managing dealers, cars, and reviews
- REST API endpoints for dealers, reviews, and car makes/models

## 📁 Project Structure

```
fullstack-developer-capstone/
├── server/
│   ├── djangoapp/                 # Django application (auth, reviews, admin)
│   ├── server/                    # Django project settings
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/        # React components (Register, Login, Dealers, etc.)
│   │   │   └── App.js
│   │   └── static/                # Static pages (About.html, Contact.html, CSS)
│   ├── databases/                 # SQLite and MongoDB data
│   ├── manage.py
│   ├── Dockerfile
│   └── requirements.txt
├── .github/workflows/             # GitHub Actions CI/CD workflow
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Python 3.9+
- Node.js 16+
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/fullstack-developer-capstone.git
   cd fullstack-developer-capstone
   ```
2. Install backend dependencies:
   ```bash
   cd server
   pip install -r requirements.txt
   ```
3. Run migrations and start the Django server:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```
4. Install frontend dependencies and build:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
5. Open the app at `http://localhost:8000`

## 🔗 Key API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Fetch all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Fetch dealers by state |
| `/djangoapp/dealer/<id>` | GET | Fetch dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Fetch reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review (with sentiment analysis) |
| `/djangoapp/get_cars` | GET | Fetch all car makes and models |

## 🔄 CI/CD

The GitHub Actions workflow (`.github/workflows/cicd.yml`) automatically builds the Docker image, runs tests, and deploys the container to IBM Cloud Code Engine on every push to the `main` branch.

## ☁️ Deployment

The application is deployed on IBM Cloud Code Engine:
`https://bestcarsdealership.<region>.codeengine.app`

## 👤 Author

Capstone project submitted for the IBM Full Stack Application Development Capstone Project course.