import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../../components/main/Navbar/Navbar';
import Task from '../../components/main/Task/Task';

import s from './CollectionTasks.module.scss'
import { GetTaskById } from '../../hooks/dataTasksParser';

const OneTask = () => {
  const { taskId } = useParams()
  const {data} = GetTaskById(taskId)
  return (
    <div className={s.TaskPage}>
      <Navbar />
      <Task task={data} /> 
    </div>
  )
}

export default OneTask