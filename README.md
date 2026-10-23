# Full Stack Application Development Capstone Project

## Repository Name
**xrwvm-fullstack_developer_capstone**

## Project Name
**DealershipX — Full Stack Car Dealership Web Application**

---

## Overview
DealershipX is a full-stack web application developed as the final capstone project for the IBM Full Stack Application Development Capstone course. The application allows users to browse car dealerships, view dealer details and customer reviews, perform sentiment analysis on reviews, register/login as a user, and post their own reviews for a dealership.

## Technology Stack
- **Backend:** Django, Django REST Framework, SQLite3
- **Frontend:** React, React Router, Cloudant SDK (dealership data service)
- **Sentiment Analysis:** IBM Watson Natural Language Understanding (NLU)
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Cloud Code Engine
- **Version Control:** Git / GitHub

## Features
- Home page listing all car dealers with state-based filtering
- Dealer detail page with customer reviews
- Sentiment analysis (positive / negative / neutral) on each review
- User registration, login, and logout (session-based authentication)
- Post review page (only available to logged-in users)
- Django admin panel for managing dealers, cars, and reviews
- REST API endpoints for dealers, reviews, and sentiment analysis
- Automated CI/CD pipeline with GitHub Actions

## Project Structure
```
xrwvm-fullstack_developer_capstone/
├── server/
│   ├── djangoapp/            # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   ├── About.html
│   │   │   ├── Contact.html
│   │   │   └── css/
│   │   ├── src/
│   │   │   └── components/
│   │   │       ├── Register/Register.jsx
│   │   │       ├── Login/Login.jsx
│   │   │       ├── Dealers/Dealers.jsx
│   │   │       ├── Dealers/Dealer.jsx
│   │   │       └── PostReview/PostReview.jsx
│   │   ├── views.py
│   │   ├── models.py
│   │   ├── restapis.py
│   │   └── urls.py
│   ├── server/               # Django project settings
│   ├── manage.py
│   ├── requirements.txt
│   └── microservices/        # Dealership and sentiment microservices
├── .github/workflows/        # GitHub Actions CI/CD workflow
└── README.md
```

## Setup and Run Locally
```bash
# Clone the repository
git clone https://github.com/<your-username>/xrwvm-fullstack_developer_capstone.git
cd xrwvm-fullstack_developer_capstone/server

# Install dependencies
pip install -r requirements.txt

# Apply migrations and start the Django server
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

The application will be available at `http://localhost:8000/`.

## API Endpoints
| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/get_dealers/` | GET | Fetch all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Fetch dealers by state |
| `/djangoapp/dealer_details/<id>` | GET | Fetch dealer details and reviews |
| `/djangoapp/fetch_dealers` | GET | Fetch dealers from Cloudant service |
| `/djangoapp/add_review` | POST | Post a review for a dealer |
| `/djangoapp/analyze_review` | POST | Sentiment analysis of review text |
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Login user |
| `/djangoapp/logout` | GET | Logout user |

## Deployment
The application is deployed on IBM Cloud Code Engine. The live deployment URL is stored in the `deploymentURL` file in this repository.

## Author
Capstone project submitted for the **IBM Full Stack Application Development Capstone Project** course on Coursera / IBM Skills Network.