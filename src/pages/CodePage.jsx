// Imports React.
import React from "react";

// Imports the created CodeCard component.
import CodeCard from "../components/CodeCard";

// Imports all the necessary images.
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

// Exports all the HTML that will display on the code page.
export default function CodePage() {
  return (
    <div className="code-page">
      <h1>Code</h1>
      <p>
        A compilation of projects I've undertaken, spanning from my initiation
        into web design in 2018 to reaching a significant proficiency level in
        2024.
      </p>
      <div className="code-cards-container">
        <CodeCard
          title="Corporate Expense Tracker"
          imageSrc={expenseTrackerImg}
          deployedLink="https://expense-tracker-ut-8e4127567b9a.herokuapp.com/login"
          repoLink="https://github.com/kleppy/expense-tracker"
        />
        <CodeCard
          title="Multiple-Choice Quiz"
          imageSrc={quizImg}
          deployedLink="https://jessedenier.github.io/Multiple-Choice-Quiz/"
          repoLink="https://github.com/JesseDenier/Multiple-Choice-Quiz"
        />
        <CodeCard
          title="Password Generator"
          imageSrc={passwordImg}
          deployedLink="https://jessedenier.github.io/Password-Generator/"
          repoLink="https://github.com/JesseDenier/Password-Generator"
        />
        <CodeCard
          title="Corporate Website"
          imageSrc={companyWebsiteImg}
          deployedLink="https://formatllc.com/"
          repoLink="https://github.com/JesseDenier/Format-Website"
        />
        <CodeCard
          title="Parlay Calculator"
          imageSrc={parlayImg}
          deployedLink="https://jessedenier.github.io/Parlay-Probability/"
          repoLink="https://github.com/JesseDenier/Parlay-Probability"
        />
        <CodeCard
          title="Recipe Creator"
          imageSrc={recipeImg}
          deployedLink="https://jessedenier.github.io/Recipe-Creator/"
          repoLink="https://github.com/JesseDenier/Recipe-Creator"
        />
        <CodeCard
          title="Accessibility Cleanup"
          imageSrc={cleanupImg}
          deployedLink="https://jessedenier.github.io/Adding-Accessibility-and-Semantic-Code/"
          repoLink="https://github.com/JesseDenier/Adding-Accessibility-and-Semantic-Code"
        />
        <CodeCard
          title="Work Scheduler"
          imageSrc={scheduleImg}
          deployedLink="https://jessedenier.github.io/Work-Scheduler/"
          repoLink="https://github.com/JesseDenier/Work-Scheduler"
        />
        <CodeCard
          title="Weather Dashboard"
          imageSrc={weatherImg}
          deployedLink="https://jessedenier.github.io/Weather-Dashboard/"
          repoLink="https://github.com/JesseDenier/Weather-Dashboard"
        />
        <CodeCard
          title="Bingo"
          imageSrc={bingoImg}
          deployedLink="https://jessedenier.github.io/Bingo/"
          repoLink="https://github.com/JesseDenier/Bingo"
        />
      </div>
    </div>
  );
}
