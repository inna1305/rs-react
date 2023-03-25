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
  dateInputRef = React.createRef<DateInput>();
  selectInputRef = React.createRef<SelectInput>();
  //checkboxInputRef = React.createRef<CheckboxInput>();
  radioInputRef = React.createRef<RadioInput>();

  render() {
    return (
      <>
        <Header />
        <form className="home-create-form" onSubmit={this.handleSubmit}>
          <h3 className="home-create-form__title">Add your pet</h3>
          <NameInput ref={this.nameInputRef} />
          <DateInput ref={this.dateInputRef} />
          <SelectInput ref={this.selectInputRef} />
          {/*<CheckboxInput ref={this.checkboxInputRef.map} />*/}
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
    //console.log(this.checkboxInputRef.current?.inputRef.current?.value);
    const AnimalType = this.radioInputRef.current?.radioRefs.map((ref) => {
      if (ref.current?.checked) {
        console.log(ref.current?.value);
      }
    });
  };
}

export default FormCreateCard;
