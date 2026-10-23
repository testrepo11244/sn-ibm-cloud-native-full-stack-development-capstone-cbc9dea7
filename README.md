# Full Stack Application Development Capstone Project

## Repository Name

**fullstack-car-dealership-capstone**

## Project Name

**Best Cars Dealership – Full Stack Car Dealership Review Application**

## Project Overview

Best Cars Dealership is a full-stack web application developed as the final capstone project for the **IBM Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, view dealer details, read and post dealership reviews, and view sentiment analysis results for reviews.

The backend is built with **Django** and **Django REST Framework**, the frontend is built with **React**, sentiment analysis is powered by **IBM Watson NLU**, and the application is deployed to **IBM Cloud Code Engine** with CI/CD automation via **GitHub Actions**.

## Technology Stack

- **Backend:** Python, Django, Django REST Framework, SQLite
- **Frontend:** React, React Router, Express (Node proxy), HTML5, CSS3
- **Sentiment Analysis:** IBM Watson Natural Language Understanding (NLU)
- **Database:** SQLite (Django ORM)
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Cloud Code Engine (Docker container)
- **Version Control:** Git / GitHub

## Key Features

- User registration and login/logout (Django authentication)
- Admin panel for managing dealerships, cars, and reviews
- List all dealerships and filter dealerships by state
- View dealership details along with posted reviews
- Post a review for a dealership (logged-in users only)
- Sentiment analysis of review text using IBM Watson NLU
- Static pages: About Us and Contact Us
- Automated CI/CD pipeline with GitHub Actions

## Project Structure

```
fullstack-car-dealership-capstone/
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates)
│   ├── server/                    # Django project settings
│   ├── frontend/                  # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealer/Dealer.jsx
│   │   │   │   ├── PostReview/PostReview.jsx
│   │   │   │   ├── Header/Header.jsx
│   │   │   │   └── ...
│   │   │   └── App.js
│   │   └── static/                # Static pages (About.html, Contact.html)
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── .github/workflows/server.yml   # GitHub Actions CI/CD workflow
├── README.md
└── .gitignore
```

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<username>/fullstack-car-dealership-capstone.git
   cd fullstack-car-dealership-capstone
   ```

2. Install Python dependencies:

   ```bash
   pip install -r server/requirements.txt
   ```

3. Run database migrations:

   ```bash
   cd server
   python manage.py migrate
   ```

4. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

5. Build and run the React frontend:

   ```bash
   cd frontend
   npm install
   npm run build
   ```

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Get all dealerships |
| `/djangoapp/get_dealers/<state>` | GET | Get dealerships by state |
| `/djangoapp/dealer/<id>` | GET | Get dealership details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Get reviews for a dealership |
| `/djangoapp/add_review` | POST | Post a review for a dealership |
| `/djangoapp/analyze_review` | POST | Analyze review sentiment (Watson NLU) |
| `/djangoapp/get_cars` | GET | Get all car makes and models |

## CI/CD and Deployment

The GitHub Actions workflow (`.github/workflows/server.yml`) builds the Docker image, runs tests, and deploys the containerized Django application to **IBM Cloud Code Engine** on every push to the `main` branch.

## Author

Capstone project submitted for the IBM Full Stack Application Development Capstone Project course.