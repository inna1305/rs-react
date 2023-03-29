import React, { Component, FormEvent, ReactElement } from 'react';
import NameInput from './inputs/NameInput';
import DateInput from './inputs/DateInput';
import SelectInput from './inputs/SelectInput';
import CheckboxInput from './inputs/CheckboxInput';
import RadioInput from './inputs/RadioInput';
import FileInput from './inputs/FileInput';
import './form.css';
import Header from '../../../Header/Header';
import { AnimalType, Features, ICard, IState, Tactility } from '../../../../types';
import { Card } from '../Cards/Card';
class FormCreateCard extends Component<object, IState> {
  formRef = React.createRef<HTMLFormElement>();
  nameInputRef = React.createRef<NameInput>();
  dateInputRef = React.createRef<DateInput>();
  selectInputRef = React.createRef<SelectInput>();
  checkboxInputRef = React.createRef<CheckboxInput>();
  radioInputRef = React.createRef<RadioInput>();
  fileInputRef = React.createRef<FileInput>();
  refForwardImage = React.createRef<HTMLInputElement>();

  constructor(props: IState) {
    super(props);
    this.state = {
      cards: [],
      nameValue: null,
      dateValue: null,
      tactilityValue: null,
      typeValue: null,
      featuresValues: null,
      photoValue: '../../../../../public/defaultAvatar.jpg',
      nameWarning: false,
      dateWarning: false,
      refForwardImage: this.refForwardImage,
    };
  }

  render() {
    return (
      <>
        <Header />
        <div className="warn">
          sorry, my work is still in progress. if it doesn&apos;t bother you, check the work later ♥
        </div>
        <form className="home-create-form" onSubmit={this.handleSubmit} ref={this.formRef}>
          <h3 className="home-create-form__title">Add your pet</h3>
          <NameInput ref={this.nameInputRef} />
          {this.renderWarning('&#62; 2 characters and no numbers', this.state.nameWarning)}
          <DateInput ref={this.dateInputRef} />
          {this.renderWarning('1999-2023', this.state.dateWarning)}
          <SelectInput ref={this.selectInputRef} />
          <CheckboxInput ref={this.checkboxInputRef} />
          <RadioInput ref={this.radioInputRef} />
          <FileInput ref={this.fileInputRef} />
          <button type="submit" className="form-button">
            Add
          </button>
        </form>
        {this.state.cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
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
    const tactility = this.selectInputRef.current?.inputRef.current?.value as Tactility;
    if (!tactility) {
      throw new Error('tactility value is not found');
    }
    const features: Features[] = [];
    this.checkboxInputRef.current?.checkboxRefs.map((ref) => {
      if (ref.current?.checked) {
        features.push(ref.current.value as Features);
      }
    });
    let animalType = AnimalType.Different;
    this.radioInputRef.current?.radioRefs.map((ref) => {
      if (ref.current?.checked) {
        animalType = ref.current?.value as AnimalType;
      }
    });
    const photo = (this.refForwardImage.current?.files as FileList)
      ? URL.createObjectURL((this.refForwardImage.current?.files as FileList)[0])
      : '../../../../../public/defaultAvatar.jpg';

    this.setState({
      tactilityValue: tactility,
      featuresValues: features,
      typeValue: animalType,
      photoValue: photo,
    });

    const promise = this.validateName(name);
    const promise2 = this.validateDate(date);
    Promise.all([promise, promise2]).then(() => {
      if (this.isValid()) {
        this.createCard();
        this.formRef.current?.reset();
      }
    });
  };

  async validateName(name: string | undefined) {
    if (!name || name.length < 2) {
      this.setState({ nameValue: null, nameWarning: true });
      return;
    } else {
      this.setState({ nameValue: name, nameWarning: false });
    }
  }

  async validateDate(dateString: string | undefined) {
    if (!dateString) {
      this.setState({ dateValue: null, dateWarning: true });
      return;
    }
    const date = new Date(dateString);
    const currentYear = new Date().getFullYear();
    if (isNaN(date.getTime())) {
      this.setState({ dateValue: null, dateWarning: true });
      return;
    }
    if (date.getFullYear() < 1900 || date.getFullYear() > currentYear) {
      this.setState({ dateValue: null, dateWarning: true });
      return;
    }
    this.setState({ dateValue: date, dateWarning: false });
  }

  createCard() {
    const name = this.state.nameValue!;
    const birthday = this.state.dateValue!;
    const tactility = this.state.tactilityValue!;
    const features = this.state.featuresValues!;
    const type = this.state.typeValue!;
    const photo = this.state.photoValue!;
    const newCard: ICard = { name, birthday, tactility, photo, type, features };
    this.setState({
      cards: [...this.state.cards, newCard],
    });
  }

  isValid = () => {
    return !this.state.nameWarning && !this.state.dateWarning;
  };
}

export default FormCreateCard;
