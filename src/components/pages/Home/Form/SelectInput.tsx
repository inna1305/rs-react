import React from 'react';
import { Tactility } from '../../../../types';

const SelectInput = () => {
  function validateSelect() {
    //?
  }
  return (
    <>
      <div className="home-create-form__group select-elem">
        <div className="home-create-form__label">Tactility</div>
        <select className="home-create-form__select">
          <option className="home-create-form__option">{Tactility.LoveToHug}</option>
          <option className="home-create-form__option">{Tactility.HardToGet}</option>
        </select>
      </div>
    </>
  );
};

export default SelectInput;
