# Best Cars Dealership

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**Best Cars Dealership — Full Stack Application Development Capstone Project**

---

## Overview

Best Cars Dealership is a full-stack web application developed as the final submission for the
IBM **Full Stack Application Development Capstone Project** course. The application allows users
to browse car dealerships, filter dealers by state, view dealer details and customer reviews,
perform sentiment analysis on reviews, post new reviews, and manage user accounts
(sign-up, login, logout) through a secure Django backend with a React front end.

## Features

- **Dealership Listings** — View all dealers or filter dealers by state on the home page.
- **Dealer Details & Reviews** — Open any dealer to see full details along with customer reviews.
- **Post a Review** — Logged-in users can submit a review for any dealership.
- **Sentiment Analysis** — Reviews are analyzed using IBM Watson Natural Language Understanding (NLU) to determine positive/negative sentiment.
- **User Authentication** — Sign-up, login, and logout functionality backed by Django's authentication system.
- **Admin Panel** — Django admin site for managing users, dealers, cars, and reviews.
- **Static Pages** — Custom "About Us" and "Contact Us" pages with navigation and styling.
- **CI/CD** — Automated build/test/deploy pipeline using GitHub Actions, deployed to IBM Cloud Code Engine.

## Technology Stack

| Layer      | Technology |
|------------|------------|
| Front End  | React.js, React Router, HTML5, CSS3 |
| Back End   | Python, Django, Django REST Framework |
| Database   | SQLite (Django ORM), MongoDB/Cloudant (reviews & sentiment) |
| NLU        | IBM Watson Natural Language Understanding |
| Deployment | IBM Cloud Code Engine (Docker container) |
| CI/CD      | GitHub Actions |

## Project Structure

```
fullstack-car-dealership-capstone/
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   ├── About.html
│   │   │   └── Contact.html
│   │   ├── templates/djangoapp/   # index.html, dealer_details.html, add_review.html, etc.
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── restapis.py
│   │   └── urls.py
│   ├── server/                    # Django project settings
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealer/Dealer.jsx
│   │   │   │   └── PostReview/PostReview.jsx
│   │   │   └── App.js
│   │   └── package.json
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── .github/workflows/cicd.yml     # GitHub Actions CI/CD workflow
└── README.md
```

## Prerequisites

- Python 3.9+
- Node.js 16+
- Django 4.x
- IBM Cloud account (Watson NLU, Code Engine)

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/<github-username>/fullstack-car-dealership-capstone.git
cd fullstack-car-dealership-capstone/server

# Install Python dependencies
pip install -r requirements.txt

# Apply migrations and create the root (super) user
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser

# Start the Django development server
python manage.py runserver
```

```bash
# Build and run the React front end
cd ../frontend
npm install
npm start
```

## Key Endpoints

| Endpoint | Description |
|----------|-------------|
| `/djangoapp/` | Home page — list of all dealers |
| `/djangoapp/get_dealers/` | REST: fetch all dealers |
| `/djangoapp/get_dealers/<state>` | REST: fetch dealers by state |
| `/djangoapp/dealer/<id>` | Dealer details and reviews |
| `/djangoapp/reviews/dealer/<id>` | REST: fetch reviews for a dealer |
| `/djangoapp/add_review` | REST: post a review (authenticated) |
| `/djangoapp/login` | User login |
| `/djangoapp/logout` | User logout |
| `/djangoapp/register` | User sign-up |
| `/djangoapp/analyze_review_sentiment` | REST: Watson NLU sentiment analysis |
| `/djangoapp/admin` | Django admin site |

## CI/CD & Deployment

The GitHub Actions workflow (`.github/workflows/cicd.yml`) automatically builds the Docker
image, runs tests, and deploys the container to **IBM Cloud Code Engine** on every push to the
`main` branch. The live application URL is recorded in the `deploymentURL` file in the
repository root.

## Author

Capstone submission for the IBM Full Stack Application Development Capstone Project
(Coursera / IBM Skills Network).

## License

This project is licensed under the MIT License.