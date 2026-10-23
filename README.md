# Full Stack Application Development Capstone Project

## Repository Name
**fullstack-capstone-dealership**

## Project Name
**Best Cars Dealership — Full Stack Django & React Web Application**

---

## Overview

Best Cars Dealership is a full-stack web application developed as the final capstone
project for the **IBM Full Stack Application Development Capstone Project** course.
The application allows users to browse car dealerships, filter dealers by state,
view dealer details and customer reviews, perform sentiment analysis on reviews,
register/login, and post their own reviews for a dealership.

The backend is built with **Django** and **Django REST Framework**, the frontend is
built with **React**, the application is containerized with **Docker**, and it is
deployed to **IBM Cloud Code Engine** through a **GitHub Actions CI/CD pipeline**.

---

## Features

- **Dealership listing** — view all dealers or filter dealers by state
- **Dealer details** — view dealer information along with all posted reviews
- **User authentication** — Sign-up, Login, and Logout (Django auth + session cookies)
- **Post reviews** — authenticated users can review a dealership
- **Sentiment analysis** — reviews are analyzed (positive / negative / neutral) using IBM Watson NLU
- **Static pages** — custom "About Us" and "Contact Us" pages
- **Admin panel** — Django admin for managing dealers, cars, and reviews
- **CI/CD** — automated build, test, and deployment via GitHub Actions

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React, React Router, CSS            |
| Backend    | Python, Django, Django REST Framework, SQLite |
| NLU        | IBM Watson Natural Language Understanding |
| Container  | Docker, docker-compose              |
| CI/CD      | GitHub Actions                      |
| Deployment | IBM Cloud Code Engine               |

---

## Project Structure

```
fullstack-capstone-dealership/
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   ├── About.html
│   │   │   └── Contact.html
│   │   ├── templates/djangoapp/   # Django templates (index, dealer details, reviews)
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── restapis.py
│   │   └── urls.py
│   ├── server/                    # Django project settings
│   ├── frontend/                  # React application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealer/Dealer.jsx
│   │   │   │   ├── PostReview/PostReview.jsx
│   │   │   │   └── ...
│   │   │   └── App.js
│   │   └── package.json
│   ├── manage.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .github/workflows/cicd.yml
├── database/
│   └── data.sqlite
└── README.md
```

---

## Prerequisites

- Python 3.9+
- Node.js 16+
- Docker (optional, for containerized deployment)
- An IBM Cloud API key with Watson NLU provisioned (for sentiment analysis)

---

## Installation & Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-github-username>/fullstack-capstone-dealership.git
   cd fullstack-capstone-dealership
   ```

2. **Backend setup**

   ```bash
   cd server
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

   The Django server starts at `http://127.0.0.1:8000/`.

3. **Frontend setup**

   ```bash
   cd server/frontend
   npm install
   npm start
   ```

   The React app starts at `http://localhost:3000/`.

---

## Key API Endpoints

| Endpoint                          | Method | Description                          |
|-----------------------------------|--------|--------------------------------------|
| `/djangoapp/register`             | POST   | Register a new user                  |
| `/djangoapp/login`                | POST   | Log in an existing user              |
| `/djangoapp/logout`               | GET    | Log out the current user             |
| `/djangoapp/get_dealers/`         | GET    | Fetch all dealers                    |
| `/djangoapp/get_dealers/<state>`  | GET    | Fetch dealers filtered by state      |
| `/djangoapp/dealer/<dealer_id>`   | GET    | Fetch a dealer by ID                 |
| `/djangoapp/reviews/dealer/<id>`  | GET    | Fetch all reviews for a dealer       |
| `/djangoapp/add_review`           | POST   | Post a review for a dealer           |
| `/djangoapp/analyze_review`       | POST   | Run sentiment analysis on review text|
| `/djangoapp/get_cars`             | GET    | Fetch all car makes and models       |

---

## CI/CD & Deployment

The GitHub Actions workflow (`.github/workflows/cicd.yml`) automatically:

1. Installs dependencies and runs the Django test suite
2. Builds the Docker image for the server
3. Pushes the image to IBM Cloud Container Registry
4. Deploys the updated image to IBM Cloud Code Engine

The deployed application URL is stored in the `deploymentURL` file in this repository.

---

## Author

Capstone project completed for the IBM Full Stack Application Development
Professional Certificate.