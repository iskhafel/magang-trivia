# Magang Trivia App

This project is a trivia quiz application that fetches random questions from an API. Users can attempt to answer the questions within a set time limit and view their results at the end.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches random trivia questions from an API.
- Displays a countdown timer for each question.
- Tracks and displays user’s correct and incorrect answers.
- Results summary at the end of the quiz.
- Responsive design, optimized for both mobile and desktop.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Used for routing between different pages in the app.
- **Flowbite**: Tailwind CSS component library for UI components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iskhafel/magang-trivia.git
   cd magang-trivia
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will run locally on [http://localhost:3000](http://localhost:3000).

## Usage

- On the main page, click the "Start Quiz" button to begin the trivia quiz.
- Answer the questions before the time runs out.
- Once the quiz ends, view your results on the results page.

## APIs Used

This project uses the [Open Trivia Database](https://opentdb.com/) API to fetch random trivia questions.

- **GET /api.php**: Fetches random trivia questions.
  Example:
