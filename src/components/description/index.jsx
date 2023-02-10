import React from 'react';
import {
  NOT_AVAILABLE, PRICE, CURRENCY, DESCRIPTION_OBJ,
} from '../../constants';
import style from './description.module.css';

function Description(props) {
  /* Props */
  const { data } = props;
  /* Check if value of the argument is an array (Some values have array, other have a string ) */
  const isArray = (constant) => {
    switch (typeof constant) {
      case 'object':
        return true;
      default:
        return false;
    }
  };
  /* Destructuring properties of the product */
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

  /* Create an object with the properties previously destructured */
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

  /* Create an array with the keys of the object that we've created previously */
  const features = [...Object.keys(featuresObj)];

  return (
    <ul>
      {
           features.map((el) => (
             <li className={style.feature} value={el} key={el}>
               <p className={style.feature__title}>{DESCRIPTION_OBJ[el]}</p>
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
