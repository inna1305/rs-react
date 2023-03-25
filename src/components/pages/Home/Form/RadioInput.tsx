import React, { Component, RefObject } from 'react';
import { InputProps } from './NameInput';

class RadioInput extends Component<InputProps> {
  dogRef = React.createRef<HTMLInputElement>();
  catRef = React.createRef<HTMLInputElement>();
  birdRef = React.createRef<HTMLInputElement>();
  rodentRef = React.createRef<HTMLInputElement>();
  radioRefs: RefObject<HTMLInputElement>[] = [
    this.dogRef,
    this.birdRef,
    this.catRef,
    this.rodentRef,
  ];

  validate() {
    //?
  }

  render() {
    return (
      <>
        <fieldset className="radio-group">
          <div className="home-create-form__label">Type</div>
          <div className="radio-values">
            <div className="radio-wrap">
              <label htmlFor="dog" className="radio-button__label">
                Dog
              </label>
              <input
                type="radio"
                name="type"
                value="dog"
                className="radio-button__input"
                ref={this.dogRef}
              />
            </div>
            <div className="radio-wrap">
              <label htmlFor="cat" className="radio-button__label">
                Cat
              </label>
              <input
                type="radio"
                name="type"
                value="cat"
                className="radio-button__input"
                ref={this.catRef}
              />
            </div>
            <div className="radio-wrap">
              <label htmlFor="dog" className="radio-button__label">
                Bird
              </label>
              <input
                type="radio"
                name="type"
                value="bird"
                className="radio-button__input"
                ref={this.birdRef}
              />
            </div>
            <div className="radio-wrap">
              <label htmlFor="rodent" className="radio-button__label">
                Rodent
              </label>
              <input
                type="radio"
                name="type"
                value="rodent"
                className="radio-button__input"
                ref={this.rodentRef}
              />
            </div>
          </div>
        </fieldset>
      </>
    );
  }
}

export default RadioInput;
