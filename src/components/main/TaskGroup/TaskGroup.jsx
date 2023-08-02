import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Navbar/Navbar";
import TaskCreator from "../TaskCreator/TaskCreator";
import s from "./TaskGroup.module.scss";
import Loading from "../../../assets/images/Loading.svg";
import { useDataNames } from "../../../hooks/useDataNames";
import { Link } from "react-router-dom";

const TaskGroup = () => {
  const { taskid } = useParams();
  const { isLoading, isError, error, data: taskData } = useDataNames(taskid);
  console.log(taskData);

  if (isLoading) {
    return (
      <div className={s.Loading}>
        <img src={Loading} alt="load" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={s.Loading}>
        <h2>
          {error.message} <br />
          <Link to={"/tasks"}>
            <h1>Go Back</h1>
          </Link>
        </h2>
        ;
      </div>
    );
  }

  return (
    <div className={s.TaskGroup}>
      <Nav />
      <TaskCreator tasks={taskData} />
    </div>
  );
};

export default TaskGroup;
