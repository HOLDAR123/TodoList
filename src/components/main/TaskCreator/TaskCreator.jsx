
import React from "react";
import s from "./TaskCreator.module.scss";
import { DataParser, useAddTask, useAddState, useDeleteTask } from "../../../hooks/DataParser";
import Loading from "../../../assets/images/Loading.svg";
import plus from "../../../assets/images/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../../../redux/taskCreatorSlice";
import { toggleModal } from "../../../redux/taskCreateModalSlice";
import Modal from "../ModalWindows/CreateTaskModal/CreateTaskModal";
import Stopwatch from "./Stopwatch/Stopwatch";
import CompletedIcon from "../../../assets/images/success.svg";
import { useQueryClient } from 'react-query';

export default function TaskCreator({ id }) {
  const { isLoading, error, data, refetch } = DataParser();
  const addTaskMutation = useAddTask();
  const deleteTaskMutation = useDeleteTask();
  const activeButtons = useSelector((state) => state.taskCreator.activeButtons);

  const { mutate } = useAddState();

  const queryClient = useQueryClient();

  const isModal = useSelector((state) => state.ModalOpener.isModal);

  const dispatch = useDispatch();

  console.log(data);

  const handleButtonClick = async (taskId) => {
    dispatch(toggleButton(taskId));
    ChangeStateIsCompleted(taskId);
    queryClient.invalidateQueries({queryKey:['favours']})
  };

  const handleDeleteTask = async (taskId) => {
    const confirmDelete = window.confirm("Вы уверены, что хотите удалить эту задачу?");
    if (!confirmDelete) {
      return;
    }

    try {
      await deleteTaskMutation.mutateAsync(taskId);
      refetch();
    } catch (error) {
      console.error("Ошибка удаления задачи:", error);
    }
  };

  const ChangeStateIsCompleted = (taskId) => {
    const task = data.find((t) => t.id === taskId);
    if (!task.isCompleted) {
      const updatedTask = { ...task, isCompleted: true };
      mutate(updatedTask);
    } else {
      const updatedTask = { ...task, isCompleted: false };
      mutate(updatedTask);
    }
  };

  const handleOpenModal = () => {
    dispatch(toggleModal());
  };

  const handleAddTask = (newTask) => {
    addTaskMutation.mutate(newTask);
  };

  if (isLoading) {
    return (
      <div className={s.Loading}>
        <img src={Loading} alt="Loading" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={s.TaskCreator}>
      <div className={s.TaskCreatorForm}>
        {isModal && <Modal onClose={handleOpenModal} onAddTask={handleAddTask} />}
        <ul>
          <li className={s.createTask}>
            <button className={s.ButtonCreate} onClick={handleOpenModal}>
              <img src={plus} alt="plus" />
            </button>
            Add Task
          </li>
          {data.map((task) => (
            <li key={task.id} className={`${s.liDefault} ${task.isCompleted ? s.completedStyle : ""}`}>
              {task.isCompleted ? (
                <div className={s.completedStyle}>
                  <button onClick={() => handleButtonClick(task.id)} className={s.CompletedIconCheck}>
                    <img src={CompletedIcon} alt="completed" />
                   <span className={s.CompletedText}> Completed</span>
                  </button>{" "}
                  <button onClick={() => handleDeleteTask(task.id)} className={s.ButtonDeleteTask}>Delete Task</button>
                </div>
              ) : (
                <>
                  <button className={`${s.Buttons} ${activeButtons.includes(task.id) ? s.active : ""}`} onClick={() => handleButtonClick(task.id)} />
                  <p className={s.taskStyle}>{task.name}</p>
                  <Stopwatch />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
