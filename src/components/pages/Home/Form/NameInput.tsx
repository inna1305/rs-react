import React, { Component } from 'react';

interface NameInputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
}
class NameInput extends Component<NameInputProps> {
  inputRef = React.createRef<HTMLInputElement>();
  validateName() {
    //с большой буквы если не mr/mrs
  }

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
          />
        </div>
      </>
    );
  }
}

export default NameInput;
