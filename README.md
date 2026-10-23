# Best Cars Dealership

**Repository Name:** `xrwvm-fullstack_developers_capstone`

**Project Name:** Best Cars Dealership – Full Stack Car Dealership Application

---

## 📋 Project Overview

Best Cars Dealership is a full-stack web application developed as part of the **IBM Full Stack Application Development Capstone Project**. The application allows users to browse car dealerships, view dealer details and customer reviews, analyze review sentiment, and post their own reviews after signing up and logging in.

## 🏗️ Architecture

| Layer      | Technology |
|------------|------------|
| Frontend   | React.js (with Material-UI) |
| Backend    | Django / Django REST Framework |
| Database   | SQLite / MongoDB |
| Sentiment Analysis | IBM Watson NLU / Django sentiment service |
| CI/CD      | GitHub Actions |
| Deployment | IBM Cloud Code Engine |

## ✨ Features

- **Dealer Listings** – View all dealerships, filter dealers by state
- **Dealer Details** – View details and reviews for any dealer by ID
- **User Authentication** – Sign up, login, and logout (Django auth)
- **Post Reviews** – Authenticated users can post reviews for dealers
- **Sentiment Analysis** – Reviews are analyzed for positive/negative/neutral sentiment
- **Admin Panel** – Django admin for managing dealers, cars, and reviews
- **CI/CD Pipeline** – Automated build, test, and deployment via GitHub Actions

## 📁 Project Structure

```
xrwvm-fullstack_developers_capstone/
├── server/
│   ├── djangoapp/              # Django application (models, views, templates)
│   ├── server/                 # Django project settings
│   ├── frontend/               # React application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/   # Sign-up page
│   │   │   │   ├── Login/      # Login page
│   │   │   │   ├── Dealers/    # Dealers listing & details
│   │   │   │   └── ...
│   │   │   └── App.js
│   │   └── static/             # Static HTML pages (About, Contact)
│   ├── manage.py
│   └── requirements.txt
├── .github/workflows/          # GitHub Actions CI/CD workflow
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 14+
- Git

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
npm start
```

## 🔗 Key Endpoints

- `/djangoapp/get_dealers/` – Fetch all dealers
- `/djangoapp/get_dealers/<state>/` – Fetch dealers by state
- `/djangoapp/dealer/<id>/` – Fetch dealer details by ID
- `/djangoapp/reviews/dealer/<id>/` – Fetch reviews for a dealer
- `/djangoapp/add_review/` – Post a review
- `/djangoapp/register` – Register a new user
- `/djangoapp/login` – User login
- `/djangoapp/logout` – User logout

## 👤 Author

Capstone learner – IBM Full Stack Application Development Professional Certificate

## 📄 License

This project is for educational purposes as part of the IBM Skills Network capstone.