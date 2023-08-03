import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../../components/main/Navbar/Navbar';
import Task from '../../components/main/Task/Task';

import s from './CollectionTasks.module.scss';
import { useGetCollectionById } from '../../hooks/dataCollectionsParser';

const CollectionTasks = () => {
  const { collectionId } = useParams();
  const { data } = useGetCollectionById(collectionId); 
  return (
    <div className={s.TaskPage}>
      <Navbar />
      <Task task={data} /> 
    </div>
  );
};

export default CollectionTasks;
