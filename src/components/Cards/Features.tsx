import React from 'react';
import { Features } from '../../types';
export interface IFeaturesProp {
  features: Features[];
}

const FeaturesComponent = ({ features }: IFeaturesProp) => {
  if (Array.isArray(features)) {
    const listItems = features.map((feature, index) => (
      <li key={index} className="list-item">
        {feature}
      </li>
    ));
    return (
      <div>
        <ul className="list-container">{listItems}</ul>
      </div>
    );
  } else {
    console.log(features);
    return <></>;
  }
};
export default FeaturesComponent;
