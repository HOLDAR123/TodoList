import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../../components/main/Navbar/Navbar';
import Task from '../../components/main/Task/Task';

import s from './OneTask.module.scss'
import { OneDataParser } from '../../hooks/DataParser';

const OneTask = () => {
  const { taskId } = useParams()
  console.log(taskId);
  const {data} = OneDataParser(taskId)
  return (
    <div className={s.TaskPage}>
      <Navbar />
      <Task task={data} /> 
    </div>
  )
}

export default OneTask