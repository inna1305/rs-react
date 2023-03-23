import React, { ChangeEvent, FormEvent } from 'react';
import NameInput from './NameInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import FileInput from './FileInput';
import './form.css';
import Header from '../../../Header/Header';

class FormCreateCard extends React.Component {
  state = {
    value: localStorage.getItem('searchWord') || '',
  };

  render() {
    return (
      <>
        <Header />
        <form className="home-create-form" onSubmit={this.handleSubmit}>
          <h3 className="home-create-form__title">Add your baby pet</h3>
          <NameInput />
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
  componentWillUnmount() {
    if (!localStorage.getItem('searchWord')) {
      localStorage.setItem('searchWord', this.state.value);
    }
    if (this.state.value.length > 0) {
      localStorage.setItem('searchWord', this.state.value);
      this.setState({ state: '' });
    }
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ state: this.state.value });
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    this.setState({ state: this.state.value });
  };
}

export default FormCreateCard;
