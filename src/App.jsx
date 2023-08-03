import s from "./App.module.scss";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import CollectionTasks from "./pages/CollectionTasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className={s.App}>
      <Router>
        <Routes>
          <Route path="/collection/:collectionId" element={<CollectionTasks />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}