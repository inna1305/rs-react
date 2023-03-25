import React, { Component, RefObject } from 'react';
import { Features } from '../../../../types';
import { InputProps } from './NameInput';

class CheckboxInput extends Component<InputProps> {
  ref1 = React.createRef<HTMLInputElement>();
  ref2 = React.createRef<HTMLInputElement>();
  ref3 = React.createRef<HTMLInputElement>();
  checkboxRefs: RefObject<HTMLInputElement>[] = [this.ref1, this.ref2, this.ref3];
  validate() {
    //?
  }

  render() {
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
              ref={this.ref1}
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
              ref={this.ref2}
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
              ref={this.ref3}
            />
          </div>
        </fieldset>
      </>
    );
  }
}
export default CheckboxInput;
