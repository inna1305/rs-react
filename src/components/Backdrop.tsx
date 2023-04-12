import React from 'react';

interface IBackdropProps {
  show: boolean;
  onClick: () => void;
}

const Backdrop = (props: IBackdropProps) => {
  return props.show ? <div className="backdrop" onClick={props.onClick}></div> : null;
};

export default Backdrop;
