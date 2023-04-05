import React, { ReactElement, useState } from 'react';
import './form.css';
import Header from '../Header/Header';
import { AnimalType, Features, Tactility } from '../../types';
import { FieldValues, useForm } from 'react-hook-form';
import { isDateValid } from './validate';
import { IFeaturesProp } from '../Cards/Features';

interface MyFormValues extends FieldValues {
  petName: string;
  birthday: string;
  tactility: Tactility;
  type: AnimalType;
  features: IFeaturesProp;
  photo: string;
}

const Form = () => {
  const [formData, setFormData] = useState<MyFormValues[]>([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<MyFormValues>();

  const onSubmit = (data: MyFormValues) => {
    setFormData([...formData, data]);
    formData.map((data, index) => {
      createCard(data, index);
    });
    reset();
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
            {...register('birthday', {
              required: true,
              validate: (value): boolean => isDateValid(value),
            })}
          />
          {errors.birthday && <span className="error">invalid date</span>}
        </div>
        <div className="home-create-form__group select-elem">
          <div className="home-create-form__label">Tactility</div>
          <select
            className="home-create-form__select"
            {...register('tactility', { required: true })}
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
              {...register('feature', { required: true })}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor={Features.BoomingVoice} className="checkbox-label">
              {Features.BoomingVoice}
            </label>
            <input
              className="checkbox-input"
              type="checkbox"
              {...register('feature', { required: true })}
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
              {...register('feature', { required: true })}
              value={Features.FatBelly}
            />
          </div>
          {errors.feature && <span className="error">choose option</span>}
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
                {...register('type', { required: true })}
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
                {...register('type', { required: true })}
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
                {...register('type', { required: true })}
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
                {...register('type', { required: true })}
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
                {...register('type', { required: true })}
              />
            </div>
          </div>
          {errors.type && <span className="error">choose type</span>}
        </fieldset>
        {/*<FileInput photo={formState.photoValue} onChange={handleInputChange} />*/}
        <button type="submit" className="form-button">
          Create
        </button>
      </form>
      {formData.map((data, index) => createCard(data, index))}
    </>
  );
};

export const createCard = (data: MyFormValues, index: number): ReactElement => {
  return (
    <div className="card-container" key={index}>
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${data.photo})`,
        }}
      ></div>
      <div className="card-info card-name">{data.petName}</div>
      <div className="card-info">{data.birthday}</div>
      <div className="card-info">{data.tactility}</div>
      <div className="card-info">{/*<FeaturesComponent {...data.features} />*/}</div>
      <div className="card-info">{data.type}</div>
    </div>
  );
};

//   handleSubmit = (event: FormEvent) => {
//     const photo = (this.refForwardImage.current?.files as FileList)
//       ? URL.createObjectURL((this.refForwardImage.current?.files as FileList)[0])
//       : '../../../../../public/defaultAvatar.jpg';
//
//
//
//   }
export default Form;
