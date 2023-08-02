import React from "react";
import s from "./HomePage.module.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <div className={s.Content}>
        <div className={s.TextContainer}>
          <h1>
            Organize Your Tasks!
            <p>(using Todolist)</p>
          </h1>

          <h2>Get Started now!</h2>
          <Link to="./tasks">
            <div className={s.ButtonClick}>
              <button>GetStarted</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
