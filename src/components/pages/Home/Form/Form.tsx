import React, { Component, FormEvent } from 'react';
import NameInput from './inputs/NameInput';
import DateInput from './inputs/DateInput';
import SelectInput from './inputs/SelectInput';
import CheckboxInput from './inputs/CheckboxInput';
import RadioInput from './inputs/RadioInput';
import FileInput from './FileInput';
import './form.css';
import Header from '../../../Header/Header';

class FormCreateCard extends Component {
  nameInputRef = React.createRef<NameInput>();
  dateInputRef = React.createRef<DateInput>();
  selectInputRef = React.createRef<SelectInput>();
  checkboxInputRef = React.createRef<CheckboxInput>();
  radioInputRef = React.createRef<RadioInput>();

  render() {
    return (
      <>
        <Header />
        <div className="warn">
          sorry, my work is still in progress. if it doesn&apos;t bother you, check the work later ♥
        </div>
        <form className="home-create-form" onSubmit={this.handleSubmit}>
          <h3 className="home-create-form__title">Add your pet</h3>
          <NameInput ref={this.nameInputRef} />
          <DateInput ref={this.dateInputRef} />
          <SelectInput ref={this.selectInputRef} />
          <CheckboxInput ref={this.checkboxInputRef} />
          <RadioInput ref={this.radioInputRef} />
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
    console.log(this.dateInputRef.current?.inputRef.current?.value);
    console.log(this.selectInputRef.current?.inputRef.current?.value);
    const features = this.checkboxInputRef.current?.checkboxRefs.map((ref) => {
      if (ref.current?.checked) {
        console.log(ref.current?.value);
      }
    });
    const AnimalType = this.radioInputRef.current?.radioRefs.map((ref) => {
      if (ref.current?.checked) {
        console.log(ref.current?.value);
      }
    });
  };
}

export default FormCreateCard;
