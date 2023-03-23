import React from 'react';
import { Features } from '../../../../types';

const CheckboxInput = () => {
  function validate() {
    //?
  }
  return (
    <>
      <fieldset>
        <div className="home-create-form__label">Features</div>
        <div className="checkbox-group">
          <label htmlFor={Features.FluffyCheeks} className="checkbox-label">
            {Features.FluffyCheeks}
          </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="feature"
            value={Features.FluffyCheeks}
            id={Features.FluffyCheeks}
          />
        </div>
        <div className="checkbox-group">
          <label htmlFor={Features.BoomingVoice} className="checkbox-label">
            {Features.BoomingVoice}
          </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="feature"
            value={Features.BoomingVoice}
            id={Features.BoomingVoice}
          />
        </div>
        <div className="checkbox-group">
          <label htmlFor={Features.FatBelly} className="checkbox-label">
            {Features.FatBelly}
          </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="feature"
            value={Features.FatBelly}
            id={Features.FatBelly}
          />
        </div>
      </fieldset>
    </>
  );
};
export default CheckboxInput;
