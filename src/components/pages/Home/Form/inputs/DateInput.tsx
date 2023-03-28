import React, { Component } from 'react';
import { InputProps } from '../../../../../types';

class DateInput extends Component<InputProps> {
  inputRef = React.createRef<HTMLInputElement>();

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
            required
          />
        </div>
      </>
    );
  }
}
export default DateInput;
