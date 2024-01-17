# Movie life
- This project is a basic web application for managing movie data, built with Node.js, Express.js, MongoDB, and React. It provides basic CRUD operations for movies and includes user authentication.

# warning : Do not run on Microsoft Edge as Edge doesnot support session storage


## Tech-Stacks:

# **Backend:**
- Node.js
- Express.js
- Mongodb  (as the database for storing movie details)
- bcrypt
- jsonwebtoken

# **Frontend:**
- React js
- Bootstrap
- Fontawesome

# **Development and Deployment:**
- omdb API
- GitHub
- Postman

# movieLife  repo link
[https://github.com/AakashGaurab/movie-viewer](https://github.com/AakashGaurab/movie-viewer)

# Setup

# 1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/username/movie-viewer.git](https://github.com/AakashGaurab/movie-viewer.git)
   cd movie-viewer
   ```
# Install backend dependencies
```
cd Backend
npm install
```
# Install frontend dependencies
```
cd movie
npm install
```

# Start the backend server
```
cd Backend
npm run server
```

# Start the frontend server
```
cd movie
npm start
```
# Entities
User
- userId(Primary key)
- name
- email(unique)
- password(hashed)

# movieData
- id(primary key)
- Title
- Year
- Type
- imdbID
- Poster

# Routes
User Routes
# Registration
POST /user/signup
```
{
"name":"Aakash",
"email":"aakash@gmail.com",
"password":"1234"
}

 Response: User Created
```                  
# Login
POST /user/login
```
              Request:{
                  "email":example@gmail.com,
                  "password":"example123"
              }

  Response:{
  {msg:"Login Succesfull",token:"token from server"}
```

# movie Routes

# upload a movie
```
POST /movie/post
headers token (jwtToken)
```

# Get All movie
```
GET /movie/get-all
header token:{jwtToken from login}
```

# GET a single movie
```
GET /movie/:id of movie
header token:{jwtToken from login}
```
# Update a Movie
```
PATCH /movie/: id of movie
headers token (jwtToken)
```
# Delete file
```
DELETE /movie/:id of movie
header token:{jwtToken from login}
```

