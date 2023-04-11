import React, { useContext, useEffect, useState } from 'react';
import { IMovie } from '../../types';
import './cards.css';
import { ConfigContext } from '../App';

const Card = (props: IMovie) => {
  const { title, id, poster_path, backdrop_path } = props;
  const config = useContext(ConfigContext);
  const [image, setImage] = useState<string | null>(null);
  const alternativeImg = '../../../public/alternativePoster.png';

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

  return (
    <div className="card-container" id={String(id)}>
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${image || alternativeImg})`,
        }}
      ></div>
      <div className="card-info card-name">{title}</div>
      <div className="card-info">{}</div>
    </div>
  );
};
export default Card;
