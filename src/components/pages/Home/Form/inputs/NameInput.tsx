import React, { Component } from 'react';

export interface InputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
}
class NameInput extends Component<InputProps> {
  inputRef = React.createRef<HTMLInputElement>();

  render() {
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
            ref={this.inputRef}
            required
          />
        </div>
      </>
    );
  }
}

export default NameInput;
