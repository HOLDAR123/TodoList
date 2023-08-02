import React from 'react';
import Navbar from '../../components/main/Navbar/Navbar';
import TaskCreator from '../../components/main/TaskCreator/TaskCreator';

import s from './TaskPage.module.scss';

export default function TaskPage() {
  return (
    <div className={s.TaskPage}>
      <Navbar />
      <TaskCreator />
    </div>
  );
}
