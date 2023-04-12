import Backdrop from '../Backdrop';
import React from 'react';
import { IMovieModal } from '../../types';
import { alternativeImg } from './Card';

const CardModal = (props: IMovieModal) => {
  return (
    <>
      <Backdrop show={true} onClick={props.onClose} />
      <div className="card-container-modal">
        <div
          className="card-photo-modal"
          style={{
            backgroundImage: `url(${props.image || alternativeImg})`,
          }}
        ></div>
        <div className="card-info card-name">{props.title}</div>
        <div className="card-info card-name">Release: {props.release_date}</div>
        <div className="card-info-modal">Overview: {props.overview}</div>
      </div>
    </>
  );
};
export default CardModal;
