import * as  React from 'react';

interface ImageProps {
    url: string;
}

const ImageItem: React.SFC<ImageProps> = (props: ImageProps) => {
      return (
          <img src={props.url}/>
      );
};

export default ImageItem;