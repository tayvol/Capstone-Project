# ❤️ Adaptive Dating Recommendation System

A modern web-based visualization of a Java Capstone Project that recommends compatible user profiles based on **Age**, **City**, **Gender**, and **Interests**.

The application demonstrates Java Object-Oriented Programming concepts using a clean and interactive frontend built with HTML, CSS, and JavaScript, and is deployed using **GitHub Pages**.

---

## 📌 Project Overview

The project simulates a simple dating recommendation system where users can:

- View user profiles
- Search profiles by Age, City, and Gender
- View recommended matches
- See user interests and hobbies
- Explore the Java project architecture
- Experience a responsive modern UI

---

## 🚀 Features

- ❤️ User Profile Cards
- 🔍 Search & Filter Users
- 📍 City-Based Matching
- 👤 Profile Details Page
- 💖 Match Recommendation Page
- 🌙 Dark Mode
- 📱 Responsive Design
- 📊 Dashboard Statistics
- 🎨 Modern User Interface
- ⚡ Fast GitHub Pages Deployment

---

## 💻 Technologies Used

### Backend (Capstone)

- Java
- Object-Oriented Programming
- DAO Design Pattern
- Collections Framework
- HashMap
- ArrayList

### Frontend

- HTML5
- CSS3
- JavaScript

### Deployment

- GitHub
- GitHub Pages

---

## 📂 Project Structure

```
Capstone-Project/

│── index.html
│── styles.css
│── script.js
│── data.js

│
├── pages/
│   ├── about.html
│   ├── matches.html
│   └── profile.html

│
├── images/
│   ├── hero.jpg
│   └── users/
│       ├── ana.jpg
│       ├── diya.jpg
│       ├── ian.jpg
│       ├── jack.jpg
│       ├── nick.jpg
│       └── sam.jpg

│
├── README.md
└── .nojekyll
```

---

## 🏗 Java Class Structure

```
Interest
│
├── likes
├── dislikes
└── hobbies

        ▲
        │

UserAccount
│
├── id
├── userName
├── age
├── city
├── gender
├── income
└── Interest

        ▲
        │

UserAccountDAO

        ▲
        │

UserAccountDAOImpl

        ▲
        │

UserAccountController
```

---

## ❤️ Matching Algorithm

The recommendation system is based on the following criteria:

- Same Age
- Same City
- Opposite Gender
- Similar Interests
- Similar Hobbies

Example Java Logic:

```java
if(user.getAge()==age &&
   user.getCity().equals(city) &&
   !user.getGender().equals(gender))
{
    matches.add(user);
}
```


---

## 📷 Screenshots

### Home Page

<img width="930" height="430" alt="image" src="https://github.com/user-attachments/assets/46b46459-d93f-4dc9-a19d-c37004e364b8" />


### Profile Page

<img width="926" height="402" alt="image" src="https://github.com/user-attachments/assets/02454eac-5684-4161-8fd1-427036e9cd92" />



---

### Matches Page
<img width="926" height="425" alt="image" src="https://github.com/user-attachments/assets/8b274ad7-0cc5-4ef6-9c41-ec5c8688c002" />


## 🎯 Learning Outcomes

This project demonstrates:

- Object-Oriented Programming
- Encapsulation
- Constructors
- Getters and Setters
- Java Collections
- DAO Pattern
- Search Algorithms
- UI Design
- Responsive Web Design
- GitHub Pages Deployment

---

## 🔮 Future Enhancements

- User Login
- Database Integration (MySQL)
- Spring Boot REST API
- Machine Learning Recommendations
- Chat System
- User Authentication
- AI-Based Compatibility Prediction
- Email Notifications

---

## 👩‍💻 Developer

**Tanaya Bedase**

Bachelor of Engineering (Computer Science)

Capstone Project

---

## 📄 License

This project is created for educational purposes as part of a Bachelor of Engineering Capstone Project.

---

## ⭐ GitHub

If you found this project useful, consider giving it a ⭐ on GitHub.


#Implementation by Tanaya

![capstone](https://github.com/user-attachments/assets/b986f0e6-447a-4350-afbd-6bb704e604fb)
