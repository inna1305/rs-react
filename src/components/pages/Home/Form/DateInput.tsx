import React, { Component } from 'react';
import { InputProps } from './NameInput';

class DateInput extends Component<InputProps> {
  inputRef = React.createRef<HTMLInputElement>();

  validateDate() {
    //?
  }

  render() {
    return (
      <>
        <div className="home-create-form__group date-group">
          <label className="home-create-form__label" htmlFor="name">
            Date of birth:{' '}
          </label>
          <input
            className="home-create-form__input input-date"
            id="name"
            type="date"
            ref={this.inputRef}
          />
        </div>
      </>
    );
  }
}
export default DateInput;
