# Full Stack Application Development Capstone Project

## Repository Name
**xrwvm-fullstack_developer_capstone**

## Project Name
**Dealerships — Full Stack Car Dealership Web Application (Django + React)**

---

## Project Overview
This capstone project is a full-stack car dealership web application built with a **Django** backend and a **React** frontend. The application allows users to browse car dealerships, filter dealers by state, view dealer details and reviews, perform sentiment analysis on reviews, post new reviews, and manage user authentication (sign-up, login, and logout).

## Features
- **User Authentication** — Sign-up, login, and logout functionality powered by Django's authentication framework.
- **Dealer Listings** — View all dealerships or filter dealerships by state.
- **Dealer Details** — View detailed information about each dealership along with its reviews.
- **Reviews** — View and post reviews for any dealership.
- **Sentiment Analysis** — IBM Watson NLU-based sentiment analysis of review text (positive / negative / neutral).
- **Admin Panel** — Django admin interface for managing dealers, cars, and reviews.
- **About Us & Contact Us** — Static pages with navigation, styling, and contact details.
- **CI/CD Deployment** — Automated build and deployment using GitHub Actions.

## Technology Stack
| Layer      | Technology |
|------------|------------|
| Frontend   | React.js, HTML5, CSS3, JavaScript (ES6) |
| Backend    | Django, Django REST Framework |
| Database   | SQLite |
| NLU        | IBM Watson Natural Language Understanding |
| CI/CD      | GitHub Actions |
| Deployment | IBM Cloud Code Engine |

## Project Structure
```
xrwvm-fullstack_developer_capstone/
├── server/
│   ├── djangoapp/
│   │   ├── templates/djangoapp/      # Django templates (About.html, Contact.html, etc.)
│   │   ├── views.py                  # REST API endpoints
│   │   ├── models.py                 # Dealer, Car, Review models
│   │   ├── restapis.py               # External dealer/review service integration
│   │   └── sentiment_analysis.py     # Watson NLU sentiment analysis
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealer/Dealer.jsx
│   │   │   │   └── PostReview/PostReview.jsx
│   │   │   └── App.js
│   ├── manage.py
│   └── requirements.txt
├── .github/workflows/server.yml      # CI/CD pipeline
└── README.md
```

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/xrwvm-fullstack_developer_capstone.git
   cd xrwvm-fullstack_developer_capstone/server
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run database migrations:
   ```bash
   python manage.py migrate
   ```
4. Start the Django development server:
   ```bash
   python manage.py runserver
   ```
5. Build the React frontend:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
6. Open the application at `http://localhost:8000`.

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Fetch all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Fetch dealers by state |
| `/djangoapp/dealer/<id>` | GET | Fetch dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Fetch reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review for a dealer |
| `/djangoapp/analyze_review` | POST | Run sentiment analysis on review text |

## Author
IBM Full Stack Application Development Capstone Project — submitted for peer/AI evaluation.