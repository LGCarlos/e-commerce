/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { CRUMBS } from '../../constants';

function Breadcrumbs() {
  return (
    <>
      <div className="breadcrumbs">
        {
            CRUMBS
              ? (
                CRUMBS.map((e) => (
                  <div key={e.name} id={e.name}>
                    <Link to={e.path}>
                      <p>{e.name}</p>
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
