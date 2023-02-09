import React from 'react';
import { NOT_AVAILABLE, PRICE, CURRENCY } from '../../constants';
import style from './description.module.css';

function Description(props) {
  const isArray = (constant) => {
    switch (typeof constant) {
      case 'object':
        return true;
      default:
        return false;
    }
  };
  const { data } = props;
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    weight,
    dimentions,
    primaryCamera,
    secondaryCmera,
  } = data;

  const featuresObj = {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    weight,
    dimentions,
    primaryCamera: isArray(primaryCamera) ? primaryCamera.join(' / ') : primaryCamera,
    secondaryCmera: isArray(secondaryCmera) ? secondaryCmera.join(' / ') : secondaryCmera,
  };

  const features = [...Object.keys(featuresObj)];

  return (
    <ul>
      {
           features.map((el) => (
             <li className={style.feature} value={el} key={el}>
               <p className={style.feature__title}>{el}</p>
               :
               {' '}
               {
                featuresObj[el]
                  ? `${featuresObj[el]}${el === PRICE ? CURRENCY.euro : ''}`
                  : NOT_AVAILABLE
               }
             </li>
           ))
        }
    </ul>
  );
}

export default Description;
