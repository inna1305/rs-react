import React from 'react';
import { Type } from '../../../../types';

const RadioInput = () => {
  function validate() {
    //?
  }
  return (
    <>
      <fieldset className="radio-group">
        <div className="home-create-form__label">Type</div>
        <div className="radio-values">
          <div className="radio-wrap">
            <label htmlFor="dog" className="radio-button__label">
              Dog
            </label>
            <input type="radio" name="type" value="dog" className="radio-button__input" />
          </div>
          <div className="radio-wrap">
            <label htmlFor="cat" className="radio-button__label">
              Cat
            </label>
            <input type="radio" name="type" value="cat" className="radio-button__input" />
          </div>
          <div className="radio-wrap">
            <label htmlFor="dog" className="radio-button__label">
              Bird
            </label>
            <input type="radio" name="type" value="bird" className="radio-button__input" />
          </div>
          <div className="radio-wrap">
            <label htmlFor="rodent" className="radio-button__label">
              Rodent
            </label>
            <input type="radio" name="type" value="rodent" className="radio-button__input" />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default RadioInput;
