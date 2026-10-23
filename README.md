# Full Stack Application Development Capstone Project

## Repository Name
`fullstack-car-dealership-capstone`

## Project Name
**Best Cars Dealership — A Django + React Full Stack Car Dealership Web Application**

---

## Overview
Best Cars Dealership is a full-stack web application developed as the final submission for the IBM **Full Stack Application Development Capstone Project**. The application allows users to browse car dealerships, filter dealers by state, view dealer details with customer reviews, register/login/logout, post reviews for dealers, and analyze the sentiment of review text using IBM Watson Natural Language Understanding (NLU).

## Features
- User authentication (Sign Up, Login, Logout) powered by Django
- Browse all car dealerships on the home page
- Filter dealerships by state
- View dealer details along with customer reviews
- Post a review for a dealership (logged-in users only)
- Sentiment analysis of review text (positive / negative / neutral)
- REST API endpoints for dealers, reviews, and car makes/models
- React frontend integrated with a Django backend
- "About Us" and "Contact Us" static pages with custom CSS
- CI/CD pipeline using GitHub Actions
- Containerized and deployed to IBM Cloud Code Engine

## Technology Stack
| Layer | Technology |
|---|---|
| Frontend | React, React Router, HTML5, CSS3 |
| Backend | Django, Django REST Framework |
| Database | SQLite |
| Sentiment Analysis | IBM Watson Natural Language Understanding (NLU) |
| CI/CD | GitHub Actions |
| Deployment | IBM Cloud Code Engine (Docker) |

## Project Structure
```
fullstack-car-dealership-capstone/
├── server/
│   ├── djangoapp/                     # Django application (models, views, templates, static)
│   ├── server/                        # Django project settings (settings.py, urls.py, wsgi.py)
│   ├── frontend/                      # React application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/          # Sign-up page (Register.jsx)
│   │   │   │   ├── Login/             # Login page (Login.jsx)
│   │   │   │   ├── Dealers/           # Home page - all dealers (Dealers.jsx)
│   │   │   │   ├── Dealer/            # Dealer details + reviews (Dealer.jsx)
│   │   │   │   └── PostReview/        # Post review page (PostReview.jsx)
│   │   │   └── App.js
│   │   └── static/                    # About.html, Contact.html, CSS, images
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── .github/workflows/                 # GitHub Actions CI/CD workflow
├── screenshots/                       # Task screenshots (admin_login, get_dealers, etc.)
├── django_server                      # Terminal output - Django server running
├── loginuser / logoutuser             # cURL command + output files
├── getalldealers / getdealerbyid      # cURL command + output files
├── getdealersbyState / getdealerreviews
├── getallcarmakes / analyzereview
├── CICD                               # GitHub Actions workflow output
├── deploymentURL                      # Deployed application URL
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- pip / npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<github-username>/fullstack-car-dealership-capstone.git
   cd fullstack-car-dealership-capstone/server
   ```
2. Install backend dependencies and run migrations:
   ```bash
   pip install -r requirements.txt
   python manage.py makemigrations
   python manage.py migrate
   ```
3. Start the Django server:
   ```bash
   python manage.py runserver
   ```
4. Build the React frontend:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

## API Endpoints
| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Login a user |
| `/djangoapp/logout` | GET | Logout the current user |
| `/djangoapp/get_dealers/` | GET | Get all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Get dealers filtered by state |
| `/djangoapp/dealer/<id>` | GET | Get dealer details by dealer ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Get all reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review for a dealer |
| `/djangoapp/get_cars` | GET | Get all car makes and models |
| `/djangoapp/analyze_review_sentiment` | POST | Analyze sentiment of review text |

## CI/CD
The project uses a GitHub Actions workflow (`.github/workflows/docker.yml`) that builds the Docker image, runs tests, and deploys the container to IBM Cloud Code Engine on every push to the `main` branch.

## Deployment
The deployed Django application URL is maintained in the `deploymentURL` file in the root of this repository.

## Author
Capstone Learner — IBM Full Stack Application Development Professional Certificate