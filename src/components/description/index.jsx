import React from 'react';

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
             <li value={el} key={el}>
               {el}
               :
               {featuresObj[el]}
             </li>
           ))
        }
    </ul>
  );
}

export default Description;
