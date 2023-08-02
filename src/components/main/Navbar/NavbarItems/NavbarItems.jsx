import React from 'react';
import s from './NavbarItems.module.scss';
import loading from '../../../../assets/images/Loading.svg';
import { Link } from 'react-router-dom';
import cross from '../../../../assets/images/Cross.svg'; 
import { DataParser } from '../../../../hooks/DataParser';

export default function NavbarItems({ isNavbarOpen, onCloseNavbar }) {
  const { isLoading, isError, data, error } = DataParser();

  if (isLoading) {
    return <div><img src={loading} alt="load" className={s.Loading} /></div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className={s.NavbarItems}>
        <ul className={s.NavbarItemsList}>
          <li>
            <button onClick={onCloseNavbar} className={s.buttonCLose}>
              <img src={cross} alt="Close" />
            </button>
          </li>
          <li className={s.Collection}><Link to={'/tasks'} className={s.MainLink}>Tasks:</Link></li>
          {data.map((task) => (
            <li key={task.id} className={s.Categories}>
              <Link to={`/tasks/${task.id}`} className={s.Link}>{task.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
