import React from 'react';
import { InputProps } from '../../../../../types';
class NameInput extends React.Component<InputProps> {
  inputRef = React.createRef<HTMLInputElement>();
  constructor(props: InputProps) {
    super(props);
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
            required
          />
        </div>
      </>
    );
  }
}

export default NameInput;
