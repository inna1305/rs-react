import React from 'react';
import './form.css';
import Header from '../../../Header/Header';
import { Features, Tactility } from '../../../../types';
import { FieldValues, useForm } from 'react-hook-form';

interface MyFormValues extends FieldValues {
  petName: string;
}

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<MyFormValues>();

  const onSubmit = (data: MyFormValues) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className="warn">
        sorry, my work is still in progress. if it doesn&apos;t bother you, check the work later ♥
      </div>
      <form className="home-create-form" onSubmit={handleSubmit(onSubmit)} id="form">
        <h3 className="home-create-form__title">Add your pet</h3>
        <div className="home-create-form__group">
          <label className="home-create-form__label" htmlFor="name">
            Person Name:{' '}
          </label>
          <input
            className="home-create-form__input"
            id="name"
            placeholder="name with a capital letter..."
            type="text"
            {...register('petName', { required: true })}
          />
          {errors.petName && <span className="error">min 1 character</span>}
        </div>
        <div className="home-create-form__group date-group">
          <label className="home-create-form__label" htmlFor="name">
            Date of birth:{' '}
          </label>
          <input
            className="home-create-form__input input-date"
            id="name"
            type="date"
            {...register('Birthday', { required: true })}
          />
        </div>
        <div className="home-create-form__group select-elem">
          <div className="home-create-form__label">Tactility</div>
          <select
            className="home-create-form__select"
            {...register('Tactility', { required: true })}
          >
            <option className="home-create-form__option">{Tactility.LoveToHug}</option>
            <option className="home-create-form__option">{Tactility.HardToGet}</option>
          </select>
        </div>
        <fieldset>
          <div className="home-create-form__label">Features</div>
          <div className="checkbox-group">
            <label htmlFor={Features.FluffyCheeks} className="checkbox-label">
              {Features.FluffyCheeks}
            </label>
            <input
              className="checkbox-input"
              type="checkbox"
              value={Features.FluffyCheeks}
              {...register('Feature', { required: true })}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor={Features.BoomingVoice} className="checkbox-label">
              {Features.BoomingVoice}
            </label>
            <input
              className="checkbox-input"
              type="checkbox"
              {...register('Feature', { required: true })}
              value={Features.BoomingVoice}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor={Features.FatBelly} className="checkbox-label">
              {Features.FatBelly}
            </label>
            <input
              className="checkbox-input"
              type="checkbox"
              {...register('Feature', { required: true })}
              value={Features.FatBelly}
            />
          </div>
        </fieldset>
        <fieldset className="radio-group">
          <div className="home-create-form__label">Type</div>
          <div className="radio-values">
            <div className="radio-wrap">
              <label htmlFor="dog" className="radio-button__label">
                Dog
              </label>
              <input
                type="radio"
                value="dog"
                className="radio-button__input"
                {...register('Type', { required: true })}
              />
            </div>
            <div className="radio-wrap">
              <label htmlFor="cat" className="radio-button__label">
                Cat
              </label>
              <input
                type="radio"
                value="cat"
                className="radio-button__input"
                {...register('Type', { required: true })}
              />
            </div>
            <div className="radio-wrap">
              <label htmlFor="dog" className="radio-button__label">
                Bird
              </label>
              <input
                type="radio"
                className="radio-button__input"
                value="bird"
                {...register('Type', { required: true })}
              />
            </div>
            <div className="radio-wrap">
              <label htmlFor="rodent" className="radio-button__label">
                Rodent
              </label>
              <input
                type="radio"
                className="radio-button__input"
                value="rodent"
                {...register('Type', { required: true })}
              />
            </div>
            <div className="radio-wrap">
              <label htmlFor="different" className="radio-button__label">
                Different
              </label>
              <input
                type="radio"
                value="different"
                className="radio-button__input"
                {...register('Type', { required: true })}
              />
            </div>
          </div>
        </fieldset>
        {/*<FileInput photo={formState.photoValue} onChange={handleInputChange} />*/}
        {/*{renderWarning('&#62; 2 characters and no numbers', this.state.nameWarning)}*/}
        <button type="submit" className="form-button">
          Create
        </button>
      </form>
    </>
  );
};

//
//   renderWarning(text: string, isVisible: boolean): ReactElement | null {
//     if (isVisible) {
//       return (
//         <>
//           <div className="warning">{text}</div>
//         </>
//       );
//     } else {
//       return null;
//     }
//   }
//
//   handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//
//     const name = this.nameInputRef.current?.inputRef.current?.value;
//     const date = this.dateInputRef.current?.inputRef.current?.value;
//     const tactility = this.selectInputRef.current?.inputRef.current?.value as Tactility;
//     if (!tactility) {
//       throw new Error('tactility value is not found');
//     }
//     const features: Features[] = [];
//     this.checkboxInputRef.current?.checkboxRefs.map((ref) => {
//       if (ref.current?.checked) {
//         features.push(ref.current.value as Features);
//       }
//     });
//     let animalType = AnimalType.Different;
//     this.radioInputRef.current?.radioRefs.map((ref) => {
//       if (ref.current?.checked) {
//         animalType = ref.current?.value as AnimalType;
//       }
//     });
//     const photo = (this.refForwardImage.current?.files as FileList)
//       ? URL.createObjectURL((this.refForwardImage.current?.files as FileList)[0])
//       : '../../../../../public/defaultAvatar.jpg';
//
//
//     const promise = this.validateName(name);
//     const promise2 = this.validateDate(date);
//     Promise.all([promise, promise2]).then(() => {
//       if (this.isValid()) {
//         this.createCard();
//         this.formRef.current?.reset();
//       }
//     });
//   };
//
//   async validateName(name: string | undefined) {
//     if (!name || name.length < 2) {
//       this.setState({ nameValue: null, nameWarning: true });
//       return;
//     } else {
//       this.setState({ nameValue: name, nameWarning: false });
//     }
//   }
//
//   async validateDate(dateString: string | undefined) {
//     if (!dateString) {
//       this.setState({ dateValue: null, dateWarning: true });
//       return;
//     }
//     const date = new Date(dateString);
//     const currentYear = new Date().getFullYear();
//     if (isNaN(date.getTime())) {
//       this.setState({ dateValue: null, dateWarning: true });
//       return;
//     }
//     if (date.getFullYear() < 1900 || date.getFullYear() > currentYear) {
//       this.setState({ dateValue: null, dateWarning: true });
//       return;
//     }
//     this.setState({ dateValue: date, dateWarning: false });
//   }
//
//   createCard() {
//     const name = this.state.nameValue!;
//     const birthday = this.state.dateValue!;
//     const tactility = this.state.tactilityValue!;
//     const features = this.state.featuresValues!;
//     const type = this.state.typeValue!;
//     const photo = this.state.photoValue!;
//     const newCard: ICard = { name, birthday, tactility, photo, type, features };
//     this.setState({
//       cards: [...this.state.cards, newCard],
//     });
//   }
//
//   isValid = () => {
//     return !this.state.nameWarning && !this.state.dateWarning;
//   };
// }
export default Form;
