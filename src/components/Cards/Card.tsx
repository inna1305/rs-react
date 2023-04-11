import React, { useContext, useEffect, useState } from 'react';
import { IMovie } from '../../types';
import './cards.css';
import { ConfigContext } from '../App';
import Backdrop from '../Backdrop';

const alternativeImg = '../../../public/alternativePoster.png';

const Card = (props: IMovie) => {
  const { title, id, poster_path, backdrop_path } = props;
  const config = useContext(ConfigContext);
  const [image, setImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchImage() {
      if (config && (backdrop_path || poster_path)) {
        const path = backdrop_path || poster_path;
        const imageSize = config.images.poster_sizes[4];
        const imageUrl = `${config.images.base_url}${imageSize}${path}`;
        setImage(imageUrl);
      }
    }
    fetchImage();
  }, [config, backdrop_path, poster_path]);

  const handleOpenCard = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="card-container" id={String(id)} onClick={handleOpenCard}>
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${image || alternativeImg})`,
        }}
      ></div>
      <div className="card-info card-name">{title}</div>
      {showModal && (
        <CardModal
          image={image}
          release_date={props.release_date}
          overview={props.overview}
          onClose={handleCloseModal}
          title={props.title}
        />
      )}
    </div>
  );
};
export default Card;

interface IMovieModal {
  title: string;
  overview: string;
  release_date: string;
  image?: string | null;
  onClose: () => void;
}

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
