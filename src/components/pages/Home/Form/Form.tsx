import React, { Component, FormEvent, ReactElement } from 'react';
import NameInput from './inputs/NameInput';
import DateInput from './inputs/DateInput';
import SelectInput from './inputs/SelectInput';
import CheckboxInput from './inputs/CheckboxInput';
import RadioInput from './inputs/RadioInput';
import FileInput from './FileInput';
import './form.css';
import Header from '../../../Header/Header';
import { AnimalType, IState } from '../../../../types';

class FormCreateCard extends Component<object, IState> {
  nameInputRef = React.createRef<NameInput>();
  dateInputRef = React.createRef<DateInput>();
  selectInputRef = React.createRef<SelectInput>();
  checkboxInputRef = React.createRef<CheckboxInput>();
  radioInputRef = React.createRef<RadioInput>();

  constructor(props: IState) {
    super(props);
    this.state = {
      inputName: null,
      dateInput: null,
      tactility: null,
      type: null,
      features: null,
      photo: null,
      nameWarning: false,
      dateWarning: false,
    };
  }

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
          {this.renderWarning('&#62; 2 characters and no numbers', this.state.nameWarning)}
          <DateInput ref={this.dateInputRef} />
          {this.renderWarning('1999-2023', this.state.dateWarning)}
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

  renderWarning(text: string, isVisible: boolean): ReactElement | null {
    if (isVisible) {
      return (
        <>
          <div className="warning">{text}</div>
        </>
      );
    } else {
      return null;
    }
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const name = this.nameInputRef.current?.inputRef.current?.value;
    const date = this.dateInputRef.current?.inputRef.current?.value;
    const tactility = this.selectInputRef.current?.inputRef.current?.value;
    const features: string[] = [];
    this.checkboxInputRef.current?.checkboxRefs.map((ref) => {
      if (ref.current?.checked) {
        features.push(ref.current.value);
      }
    });
    let animalType = `${AnimalType.Different}`;
    this.radioInputRef.current?.radioRefs.map((ref) => {
      if (ref.current?.checked) {
        animalType = ref.current?.value;
      }
    });

    const promise = this.validateName(name);
    const promise2 = this.validateDate(date);
    Promise.all([promise, promise2]).then(() => {
      if (this.isValid()) {
        this.createCard();
      }
    });
  };

  async validateName(name: string | undefined) {
    if (!name || name.length < 2) {
      this.setState({ inputName: null, nameWarning: true });
      return;
    } else {
      this.setState({ inputName: name, nameWarning: false });
    }
  }

  async validateDate(dateString: string | undefined) {
    if (!dateString) {
      this.setState({ dateInput: null, dateWarning: true });
      return;
    }
    const date = new Date(dateString);
    const currentYear = new Date().getFullYear();
    if (isNaN(date.getTime())) {
      this.setState({ dateInput: null, dateWarning: true });
      return;
    }
    if (date.getFullYear() < 1900 || date.getFullYear() > currentYear) {
      this.setState({ dateInput: null, dateWarning: true });
      return;
    }
    this.setState({ dateInput: dateString, dateWarning: false });
  }

  createCard(): void {
    console.log('create test');
    console.log(this.state);
  }

  isValid = () => {
    return !this.state.nameWarning && !this.state.dateWarning;
  };
}

export default FormCreateCard;
