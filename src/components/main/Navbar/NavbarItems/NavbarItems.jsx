import React from 'react';
import s from './NavbarItems.module.scss';
import loading from '../../../../assets/images/Loading.svg';
import { Link } from 'react-router-dom';
import cross from '../../../../assets/images/Cross.svg'; 
import { GetCollections } from '../../../../hooks/dataCollectionsParser'; 
import { useQueryClient } from 'react-query';

export default function NavbarItems({ isNavbarOpen, onCloseNavbar }) {
  const queryClient = useQueryClient();
  


  const { isLoading, isError, data, error } = GetCollections();

  if (isLoading) {
    return <div><img src={loading} alt="load" className={s.Loading} /></div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  queryClient.invalidateQueries({queryKey:['collections']})


  return (
    <>
      <div className={s.NavbarItems}>
        <ul className={s.NavbarItemsList}>
          <li>
            <button onClick={onCloseNavbar} className={s.buttonCLose}>
              <img src={cross} alt="Close" />
            </button>
          </li>
          <li className={s.Collection}><Link to={'/tasks'} className={s.MainLink}>Collections</Link></li>
          {data.map((Collection) => (
            <li key={Collection.id} className={s.Categories}>
              <Link to={`/collections/${Collection.id}`} className={s.Link}>{Collection.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
