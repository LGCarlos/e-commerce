import React from 'react';
import { Link } from 'react-router-dom';
import { CRUMBS } from '../../constants';
import style from './breadcrumbs.module.css';

function Breadcrumbs() {
  return (
    <>
      <div className={style.breadcrumbs}>
        {
            CRUMBS
              ? (
                CRUMBS.map((e) => (
                  <div key={e.name} id={e.name}>
                    <Link to={e.path}>
                      <p>
                        {e.name}
                        {' '}
                        /
                      </p>

                    </Link>
                  </div>
                ))
              ) : null
        }
      </div>
      <h1>{CRUMBS.detail}</h1>

    </>
  );
}

export default Breadcrumbs;
