import React, { Component } from 'react';
import { FileInputProps } from '../../../../../types';

class FileInput extends Component<FileInputProps> {
  fileInputRef: React.RefObject<HTMLInputElement>;
  refForwardImage: React.RefObject<HTMLInputElement>;

  constructor(props: FileInputProps) {
    super(props);
    this.fileInputRef = React.createRef<HTMLInputElement>();
    this.refForwardImage = React.createRef<HTMLInputElement>();
  }
  render() {
    return (
      <div className="photo-input">
        <div className="home-create-form__label">photo</div>
        <input type="file" name="photo" id="photo" ref={this.props.refForwardImage} />
      </div>
    );
  }
}

export default FileInput;
