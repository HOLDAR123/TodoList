import React from 'react'

import s from './Task.module.scss'

function Task({task}) {
  return (
    <div className={s.Task}>
      <div className={s.TaskContainer}>
        <div className={s.NameOfTaskContainer}>
        Name: {task?.name}
        </div>
        
        <div className={s.DescriptionOfTaskContainer}>
        Description:
        <div className={s.Text}>
        {task?.TextArea}
        </div>
        </div>
      </div>
      </div>
  )
}

export default Task