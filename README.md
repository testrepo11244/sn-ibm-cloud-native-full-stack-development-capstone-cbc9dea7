# Full Stack Car Dealership Application

## Repository Name
**fullstack-car-dealership**

## Project Name
**Dealership — Full Stack Car Dealership Web Application (Django + React)**

---

## Project Overview
Dealership is a full-stack web application developed as the capstone project for the
*Full Stack Application Development Capstone Project* course (IBM Skills Network).
The application allows users to browse car dealerships, filter dealers by state,
view dealer details and customer reviews, perform sentiment analysis on reviews,
register/login, and post reviews for dealers.

## Technology Stack
| Layer            | Technology                                   |
|------------------|----------------------------------------------|
| Frontend         | React.js, React Router, CSS                  |
| Backend          | Django, Django REST Framework                |
| Database         | SQLite (development) / MongoDB (cloud)       |
| Microservices    | Node.js/Express (Dealers & Reviews), Sentiment Analysis (Flask) |
| Authentication   | Django Auth (session + token based)          |
| CI/CD            | GitHub Actions                               |
| Deployment       | IBM Cloud Code Engine                        |

## Key Features
- View all car dealerships on the home page
- Filter dealerships by state
- View dealer details along with customer reviews
- Sentiment analysis (positive/negative/neutral) of reviews
- User sign-up, login, and logout
- Post a review for a dealer (logged-in users only)
- Admin panel for managing dealers, cars, and reviews
- CI/CD pipeline with GitHub Actions and deployment to IBM Cloud Code Engine

## Project Structure
```
fullstack-car-dealership/
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   ├── About.html
│   │   │   ├── Contact.html
│   │   ├── src/                   # React source code
│   │   │   └── components/
│   │   │       ├── Register/Register.jsx
│   │   │       ├── Login/Login.jsx
│   │   │       ├── Dealers/Dealers.jsx
│   │   │       ├── Dealer/Dealer.jsx
│   │   │       └── PostReview/PostReview.jsx
│   │   ├── views.py
│   │   ├── models.py
│   │   ├── urls.py
│   ├── server/                    # Django project settings
│   ├── manage.py
│   ├── requirements.txt
│   ├── Dockerfile
├── .github/workflows/server.yml   # GitHub Actions CI/CD workflow
├── README.md
```

## Prerequisites
- Python 3.9+
- Node.js 14+
- Django 4.x
- Git

## Installation and Setup
```bash
# Clone the repository
git clone https://github.com/<your-username>/fullstack-car-dealership.git
cd fullstack-car-dealership/server

# Install Python dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py makemigrations
python manage.py migrate

# Build the React frontend
cd frontend
npm install
npm run build

# Start the Django development server
cd ..
python manage.py runserver
```

The application will be available at `http://localhost:8000/`.

## API Endpoints
| Endpoint                        | Method | Description                          |
|---------------------------------|--------|--------------------------------------|
| `/djangoapp/register`           | POST   | Register a new user                  |
| `/djangoapp/login`              | POST   | Login an existing user               |
| `/djangoapp/logout`             | GET    | Logout the current user              |
| `/djangoapp/get_dealers/`       | GET    | Get all dealers                      |
| `/djangoapp/get_dealers/<state>`| GET    | Get dealers filtered by state        |
| `/djangoapp/dealer/<id>`        | GET    | Get dealer details by ID             |
| `/djangoapp/reviews/dealer/<id>`| GET    | Get reviews for a dealer             |
| `/djangoapp/add_review`         | POST   | Post a review for a dealer           |
| `/djangoapp/analyze_review`     | POST   | Sentiment analysis of review text    |

## CI/CD and Deployment
The GitHub Actions workflow (`.github/workflows/server.yml`) builds the React app,
runs the Django checks, builds the Docker image, and deploys the container to
**IBM Cloud Code Engine** on every push to the `main` branch.

## Author
Capstone project submitted for the IBM Full Stack Application Development
Capstone Project course.