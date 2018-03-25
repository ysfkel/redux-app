import * as  React from 'react';
import styles from './image-item';

interface ImageProps {
    url: string;
}

const ImageItem: React.SFC<ImageProps> = (props: ImageProps) => {
      return (
          <img style={styles.root} src={props.url}/>
      );
};

export default ImageItem;