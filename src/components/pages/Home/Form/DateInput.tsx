import React from 'react';
import CheckboxInput from './CheckboxInput';

const DateInput = () => {
  function validateDate() {
    //?
  }
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
          // value={this.state.value}
          // onChange={this.handleChange}
        />
      </div>
    </>
  );
};
export default DateInput;
