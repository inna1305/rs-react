import React, { useContext, useEffect, useState } from 'react';
import { IMovie } from '../../types';
import './cards.css';
import { ConfigContext } from '../App';
import CardModal from './CardModal';
export const alternativeImg = '../../../public/alternativePoster.png';

const Card = (props: IMovie) => {
  const { title, id, poster_path, backdrop_path } = props;
  const config = useContext(ConfigContext);
  const [image, setImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  //const [isScrollBlocked, setIsScrollBlocked] = useState(false);

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

  const toggleModal = () => {
    setShowModal(!showModal);
    //setIsScrollBlocked(false);
  };

  return (
    <div className="card-container" id={String(id)} onClick={toggleModal}>
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${image || alternativeImg})`,
        }}
      ></div>
      <div className="card-info card-name">{title}</div>
      {showModal ? (
        <CardModal
          image={image}
          release_date={props.release_date}
          overview={props.overview}
          onClose={toggleModal}
          title={props.title}
        />
      ) : null}
    </div>
  );
};
export default Card;
