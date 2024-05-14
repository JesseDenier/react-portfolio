import React from "react";

import expenseTrackerImg from "../assets/img/code_expense_tracker.png";
import quizImg from "../assets/img/code_quiz.png";
import passwordImg from "../assets/img/code_password.png";
import companyWebsiteImg from "../assets/img/code_company.png";
import parlayImg from "../assets/img/code_parlay.png";
import recipeImg from "../assets/img/code_recipe.png";
import cleanupImg from "../assets/img/code_cleanup.png";
import scheduleImg from "../assets/img/code_scheduler.png";
import weatherImg from "../assets/img/code_weather.png";
import bingoImg from "../assets/img/code_bingo.png";

export default function AboutPage() {
  return (
    <div>
      <h1>Code</h1>
      <p>
        A compilation of projects I've undertaken, spanning from my initiation
        into web design in 2018 to reaching a significant proficiency level in
        2024.
      </p>
      <div class="card">
        <h2>Corporate Expense Tracker</h2>
        <img src={expenseTrackerImg} alt="Expense Tracker Example" />
        <p>
          <a
            href="https://expense-tracker-ut-8e4127567b9a.herokuapp.com/login"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a href="https://github.com/kleppy/expense-tracker" target="_blank">
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Multiple-Choice Quiz</h2>
        <img src={quizImg} alt="Question Example" />
        <p>
          <a
            href="https://jessedenier.github.io/Multiple-Choice-Quiz/"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Multiple-Choice-Quiz"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Password Generator</h2>
        <img src={passwordImg} alt="Password Generator Form" />
        <p>
          <a
            href="https://jessedenier.github.io/Password-Generator/"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Password-Generator"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Company Website</h2>
        <img src={companyWebsiteImg} alt="Company Website Overview" />
        <p>
          <a href="https://formatllc.com/" target="_blank">
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Format-Website"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Parlay Calculator</h2>
        <img src={parlayImg} alt="Parlay Example" />
        <p>
          <a
            href="https://jessedenier.github.io/Parlay-Probability/"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Parlay-Probability"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Recipe Creator</h2>
        <img src={recipeImg} alt="Recipe Creator Form" />
        <p>
          <a
            href="https://jessedenier.github.io/Recipe-Creator/"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Recipe-Creator"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Accessibility Cleanup</h2>
        <img src={cleanupImg} alt="Code Cleanup Overview" />
        <p>
          <a
            href="https://jessedenier.github.io/Adding-Accessibility-and-Semantic-Code/"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Adding-Accessibility-and-Semantic-Code"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Work Scheduler</h2>
        <img src={scheduleImg} alt="Work Schedule Example" />
        <p>
          <a
            href="https://jessedenier.github.io/Work-Scheduler/"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Work-Scheduler"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Weather Dashboard</h2>
        <img src={weatherImg} alt="Weather Overview" />
        <p>
          <a
            href="https://jessedenier.github.io/Weather-Dashboard/"
            target="_blank"
          >
            Deployed Application
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JesseDenier/Weather-Dashboard"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div class="card">
        <h2>Bingo</h2>
        <img src={bingoImg} alt="Bingo Overview" />
        <p>
          <a href="https://jessedenier.github.io/Bingo/" target="_blank">
            Deployed Application
          </a>
        </p>
        <p>
          <a href="https://github.com/JesseDenier/Bingo" target="_blank">
            GitHub Repo
          </a>
        </p>
      </div>
    </div>
  );
}
