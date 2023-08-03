import React, { useState } from 'react'
import s from './CreateCollectionModal.module.scss'
import { useAddCollection } from '../../../../hooks/dataCollectionsParser';
import cross from '../../../../assets/images/CrossActive.svg';
import { useQueryClient } from 'react-query';
import { toggleModal } from '../../../../redux/taskCreateModalSlice';
import  { useDispatch } from 'react-redux'

export default function CreateCollectionModal() {
    const queryClient = useQueryClient();
    const { mutate } = useAddCollection();
    const [name,setName] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const dispatch = useDispatch();

    function HandleNameCollectionData(e){
        setName(e.target.value);
    }

    function onClose (){
        dispatch(toggleModal())
    }

    function AddCollectionToDb(){
        const collection = { name, isCompleted }
        console.log(collection)
        setIsCompleted(false) 
        setName('')
        mutate(collection)
        queryClient.invalidateQueries({queryKey:['collections']})
        dispatch(toggleModal())
    }

    return (
        <div className={s.Modal}>
          <div className={s.ModalContent}>
            <button onClick={onClose} className={s.buttonClose}>
              <img src={cross} alt="cross" />
            </button>
            <div className={s.ModalText}>
              <h2>Create your Collection</h2>
              <p>This is the content of the modal.</p>
              <div className={s.TaskFormCreate}>
                <form onSubmit={(e) => { e.preventDefault();AddCollectionToDb(); }}>
                  <div>
                    <label>Name of Collection</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={HandleNameCollectionData}
                    />
                  </div>
                  <button type="submit" className={s.ButtonSumbit}>
                    Create your Collection
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}
