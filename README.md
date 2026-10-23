# xrwvm-fullstack_developer_capstone

## Project Name: AutoHub Car Dealership — Full Stack Application Development Capstone Project

**Repository Name:** `xrwvm-fullstack_developer_capstone`

**Project Name:** AutoHub Car Dealership (Full Stack Django + React Dealership Application)

---

## 📋 Project Overview

AutoHub Car Dealership is a full-stack web application developed as the final capstone project for the **IBM Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, filter dealers by state, view dealer details and customer reviews, perform sentiment analysis on reviews, register/login, and post reviews for dealers. The application is built with a **Django** backend, a **React** frontend, a **MongoDB**-backed dealership microservice, **sentiment analysis** via IBM Watson NLU, and is deployed using **IBM Cloud Code Engine** with a **GitHub Actions CI/CD** pipeline.

---

## ✨ Features

- **Home / Dealers Page** — Lists all dealers with the option to filter by state
- **Dealer Details & Reviews** — View details and reviews for any dealer by ID
- **User Authentication** — Sign-up (Register), Login, and Logout functionality
- **Post Review** — Authenticated users can post reviews for a dealer
- **Sentiment Analysis** — Review sentiment (positive/negative/neutral) analyzed with Watson NLU
- **About Us & Contact Us** — Static pages with navigation, images, and contact details
- **Admin Panel** — Django admin for managing dealers, cars, and reviews
- **REST API Endpoints** — Dealers, reviews, car makes/models, login/logout, and registration endpoints
- **CI/CD** — GitHub Actions workflow for build, test, and deployment to IBM Cloud Code Engine

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, React Router, CSS |
| Backend | Django, Django REST Framework |
| Database | SQLite (Django), MongoDB (dealership microservice) |
| Sentiment Analysis | IBM Watson Natural Language Understanding |
| CI/CD | GitHub Actions |
| Deployment | IBM Cloud Code Engine (Docker container) |

---

## 📁 Repository Structure

```
xrwvm-fullstack_developer_capstone/
│
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   ├── About.html         # About Us page
│   │   │   ├── Contact.html       # Contact Us page
│   │   │   └── css/, images/
│   │   ├── templates/djangoapp/   # Django templates (index, dealer details, add review)
│   │   ├── models.py              # CarMake, CarModel, Dealer, Review models
│   │   ├── views.py               # REST endpoints (login, logout, register, dealers, reviews)
│   │   ├── restapis.py            # External dealership microservice API calls
│   │   └── sentiment_analysis/    # Watson NLU sentiment analysis module
│   ├── server/                    # Django project settings
│   ├── frontend/                  # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx   # Sign-up page
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealer/Dealer.jsx
│   │   │   │   └── PostReview/PostReview.jsx
│   │   │   └── App.js
│   │   └── package.json
│   ├── manage.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── .github/workflows/server.yml   # GitHub Actions CI/CD workflow
├── django_server                  # Terminal output: Django server running
├── loginuser                      # cURL: login operation
├── logoutuser                     # cURL: logout operation
├── getalldealers                  # cURL: get all dealers
├── getdealerbyid                  # cURL: get dealer by ID
├── getdealersbyState              # cURL: get dealers by state (Kansas)
├── getdealerreviews               # cURL: get dealer reviews
├── getallcarmakes                 # cURL: get all car makes and models
├── analyzereview                  # cURL: sentiment analysis of "Fantastic services"
├── CICD                           # GitHub Actions workflow run output
├── deploymentURL                  # Deployed application URL
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 14+
- MongoDB (or the provided dealership microservice URL)

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup
```bash
cd server/frontend
npm install
npm run build
```

### Access the Application
- Application: `http://localhost:8000/djangoapp/`
- Admin panel: `http://localhost:8000/admin/`

---

## 🔗 Key API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/login` | POST | User login |
| `/djangoapp/logout` | GET | User logout |
| `/djangoapp/register` | POST | User registration (sign-up) |
| `/djangoapp/get_dealers/` | GET | Fetch all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Fetch dealers by state |
| `/djangoapp/dealer/<id>` | GET | Fetch dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Fetch reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review (with sentiment analysis) |
| `/djangoapp/get_cars` | GET | Fetch all car makes and models |
| `/djangoapp/analyze_review` | POST | Sentiment analysis of review text |

---

## 👤 Author

Capstone project submitted for the **IBM Full Stack Application Development Capstone Project** course on Coursera / IBM Skills Network.