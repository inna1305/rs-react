import React from 'react';
import CheckboxInput from './CheckboxInput';

const NameInput = () => {
  function validateName() {
    //с большой буквы если не mr/mrs
  }
  return (
    <>
      <div className="home-create-form__group">
        <label className="home-create-form__label" htmlFor="name">
          Person Name:{' '}
        </label>
        <input
          className="home-create-form__input"
          id="name"
          placeholder="name with a capital letter..."
          type="text"
          // value={this.state.value}
          // onChange={this.handleChange}
        />
      </div>
    </>
  );
};

export default NameInput;
