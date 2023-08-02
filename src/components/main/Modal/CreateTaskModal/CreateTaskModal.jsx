import React , {useState} from 'react';
import s from './CreateTaskModal.module.scss';
import cross from '../../../../assets/images/CrossActive.svg';
import { useAddTask } from '../../../../hooks/DataParser';

export default function Modal({ onClose }) {
  const { mutate } = useAddTask();
  const [name, setName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [TextArea,setTextArea] = useState('');

  function HandleTextArea(e){
    setTextArea(e.target.value);
  }


  function HandleChangeName(e) {
    setName(e.target.value);
  }

  function AddTaskToDb() {
    const task = { name , isCompleted, TextArea};
    setIsCompleted(false)
    mutate(task);
    setName('')
    window.location.reload();
  }

  function AddCollectionToDb() {
    setName('')
  }

  return (
    <div className={s.Modal}>
      <div className={s.ModalContent}>
        <button onClick={onClose} className={s.buttonClose}>
          <img src={cross} alt="cross" />
        </button>
        <div className={s.ModalText}>
          <h2>Create your Task</h2>
          <p>This is the content of the modal.</p>
          <div className={s.TaskFormCreate}>
            <form onSubmit={(e) => { e.preventDefault(); AddTaskToDb(); AddCollectionToDb(); }}>
              <div>
                <label>Name of DailyTasks:</label>
                <input
                  type="te"
                  required
                  value={name}
                  onChange={HandleChangeName}
                />
              </div>
              <div>
                <label>Description:</label> <br />
                <textarea cols="45" rows="10" type="text"
                className={s.textareaStyles}
                  required
                  value={TextArea}
                  onChange={HandleTextArea}>
                </textarea>
              </div>
              <button type="submit" className={s.ButtonSumbit}>
                Create your Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}