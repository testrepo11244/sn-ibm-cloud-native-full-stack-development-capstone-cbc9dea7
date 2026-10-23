# Full Stack Application Development Capstone Project

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**Best Cars Dealership — Full Stack Django + React Application**

---

## 📝 Project Description

Best Cars Dealership is a full-stack web application developed as the final capstone project for the **IBM Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, filter dealers by state, view dealer details and customer reviews, perform user registration and login, post new reviews, and view AI-powered sentiment analysis of review text using IBM Watson Natural Language Understanding (NLU).

## 🚀 Key Features

- **Dealer Management** — View all dealers, filter dealers by state, and view dealer details by ID.
- **Reviews** — Display reviews for each dealer and allow logged-in users to post new reviews.
- **Sentiment Analysis** — Analyze review sentiment (positive / negative / neutral) using IBM Watson NLU.
- **User Authentication** — Sign-up, login, and logout implemented with Django authentication.
- **Admin Panel** — Django admin site for managing users, dealers, cars, and reviews.
- **CI/CD** — Automated build, test, and deployment pipeline using GitHub Actions.
- **Cloud Deployment** — Application deployed to IBM Cloud (Code Engine) with a public deployment URL.

## 🛠️ Technology Stack

| Layer      | Technology |
|------------|------------|
| Backend    | Python, Django, Django REST Framework, SQLite |
| Frontend   | React, React Router, HTML5, CSS3, JavaScript (ES6) |
| Sentiment  | IBM Watson Natural Language Understanding (NLU) |
| Database   | SQLite (Django ORM) |
| CI/CD      | GitHub Actions |
| Deployment | IBM Cloud Code Engine |
| Versioning | Git / GitHub |

## 📂 Project Structure

```
fullstack-car-dealership-capstone/
│
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates)
│   │   ├── static/
│   │   │   ├── About.html         # About Us page
│   │   │   ├── Contact.html       # Contact Us page
│   │   │   └── css/               # Stylesheets
│   │   ├── templates/             # Django templates
│   │   ├── models.py              # CarMake, CarModel, Dealer, Review models
│   │   ├── views.py               # REST endpoints (dealers, reviews, auth)
│   │   ├── restapis.py            # External dealer/review service integration
│   │   └── sentiment_analysis.py  # Watson NLU sentiment analysis
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx   # Sign-up page
│   │   │   │   ├── Login/Login.jsx         # Login page
│   │   │   │   ├── Dealers/Dealers.jsx     # Dealers home page
│   │   │   │   ├── Dealer/Dealer.jsx       # Dealer details & reviews
│   │   │   │   └── PostReview/PostReview.jsx
│   │   │   └── App.js
│   │   └── package.json
│   ├── manage.py
│   ├── requirements.txt
│   └── Procfile
│
├── .github/workflows/server.yml   # GitHub Actions CI/CD workflow
├── README.md
└── LICENSE
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/djangoapp/get_dealers/` | Get all dealers |
| GET    | `/djangoapp/get_dealers/<state>` | Get dealers by state |
| GET    | `/djangoapp/dealer/<id>` | Get dealer details by ID |
| GET    | `/djangoapp/reviews/dealer/<id>` | Get reviews for a dealer |
| POST   | `/djangoapp/add_review` | Post a review for a dealer |
| POST   | `/djangoapp/analyze_review` | Sentiment analysis of review text |
| POST   | `/djangoapp/register` | Register a new user |
| POST   | `/djangoapp/login` | Login user |
| GET    | `/djangoapp/logout` | Logout user |
| GET    | `/djangoapp/get_cars` | Get all car makes and models |

## ⚙️ Local Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<github-username>/fullstack-car-dealership-capstone.git
   cd fullstack-car-dealership-capstone
   ```

2. **Create and activate a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate   # Windows: venv\Scripts\activate
   ```

3. **Install backend dependencies**
   ```bash
   pip install -r server/requirements.txt
   ```

4. **Run database migrations**
   ```bash
   cd server
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Start the Django server**
   ```bash
   python manage.py runserver
   ```

6. **Install and start the React frontend**
   ```bash
   cd server/frontend
   npm install
   npm start
   ```

7. Open the app at `http://localhost:3000` (React) with the Django API running at `http://localhost:8000`.

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `IBM_CLOUD_API_KEY` | IBM Cloud API key for Watson NLU |
| `NLU_SERVICE_URL` | Watson NLU service URL |
| `REACT_APP_BACKEND_URL` | Base URL of the Django backend |

## 🔄 CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/server.yml`) performs the following steps on every push to the main branch:

1. Checkout the repository
2. Set up Python and install dependencies
3. Run Django migrations and tests
4. Build the React frontend
5. Build and deploy the containerized application to IBM Cloud Code Engine

## 🌐 Deployment

The application is deployed on IBM Cloud Code Engine:
**https://bestcarsdealership.<region>.codeengine.app**

## 👤 Author

**Capstone Learner** — IBM Full Stack Application Development Professional Certificate

## 📄 License

This project is licensed under the MIT License.