# 🔮 Gender Predictor

A simple and interactive web application that predicts the likely gender associated with a given name using the **Genderize.io API**. Enter a name, and the application fetches real-time data to display the predicted gender, probability, and the number of samples used for the prediction.

## ✨ Features

- 🔍 **Name-Based Prediction** — Enter a name to predict its associated gender.
- 📊 **Probability Score** — View the API's confidence estimate for the prediction.
- 👥 **Sample Count** — See how many data samples support the prediction.
- ⚡ **Real-Time API Integration** — Fetches data dynamically using JavaScript's Fetch API.
- 📱 **Responsive Interface** — A clean and user-friendly interface.
- ⚠️ **Error Handling** — Handles invalid input and API request errors.

## 🛠️ Technologies Used

- **HTML5** — Structures the web application.
- **CSS3** — Provides styling, layout, and visual effects.
- **JavaScript (ES6+)** — Handles user interactions and asynchronous API requests.
- **Genderize.io API** — Provides gender predictions based on names.
- **Fetch API & JSON** — Retrieves and processes API responses.

## 🚀 How It Works

1. The user enters a name into the input field.
2. JavaScript validates the input.
3. The application sends a request to the Genderize.io API.
4. The API returns the predicted gender, probability, and sample count.
5. The results are displayed dynamically on the webpage.

## 📂 Project Structure

```text
Gender-Predictor/
├── README.md
├── style.css
├── script.js
└── index.html


🎯 Learning Outcomes

Building this project helped me practice:

Working with third-party REST APIs.

Using fetch() to make HTTP requests.

Understanding Promises and asynchronous JavaScript.

Parsing JSON responses.

Updating webpage content dynamically using the DOM.

Handling user input and API errors.

⚠️ Disclaimer

This application provides statistical predictions based on names and available data. It does not determine a person's actual gender identity, and predictions may be inaccurate or unavailable for some names.

👩‍💻 Author

Rozeen Umeed

If you find this project useful, feel free to ⭐ the repository!

Built with HTML, CSS, JavaScript, and the Genderize.io API.
