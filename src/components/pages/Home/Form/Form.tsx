import React, { Component, FormEvent } from 'react';
import NameInput from './NameInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import FileInput from './FileInput';
import './form.css';
import Header from '../../../Header/Header';

class FormCreateCard extends Component {
  nameInputRef = React.createRef<NameInput>();

  render() {
    return (
      <>
        <Header />
        <form className="home-create-form" onSubmit={this.handleSubmit}>
          <h3 className="home-create-form__title">Add your pet</h3>
          <NameInput ref={this.nameInputRef} />
          <DateInput />
          <SelectInput />
          <CheckboxInput />
          <RadioInput />
          <FileInput />
          <button type="submit" className="form-button">
            Add
          </button>
        </form>
      </>
    );
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.nameInputRef.current?.inputRef.current?.value);
  };
}

export default FormCreateCard;
