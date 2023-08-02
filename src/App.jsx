import s from "./App.module.scss";
import HomePage from "./components/main/HomePage/HomePage";
import TaskPage from "./pages/TaskPage";
import OneTask from "./pages/OneTaskPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className={s.App}>
      <Router>
        <Routes>
          <Route path="/tasks/:taskId" element={<OneTask />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}