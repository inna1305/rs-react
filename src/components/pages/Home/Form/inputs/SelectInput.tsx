import React, { Component } from 'react';
import { InputProps, Tactility } from '../../../../../types';

class SelectInput extends Component<InputProps> {
  inputRef = React.createRef<HTMLSelectElement>();

  render() {
    return (
      <>
        <div className="home-create-form__group select-elem">
          <div className="home-create-form__label">Tactility</div>
          <select className="home-create-form__select" ref={this.inputRef} required>
            <option className="home-create-form__option">{Tactility.LoveToHug}</option>
            <option className="home-create-form__option">{Tactility.HardToGet}</option>
          </select>
        </div>
      </>
    );
  }
}

export default SelectInput;
