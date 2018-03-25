import * as React from 'react';
import { ImageBlobType } from '../image.types';
import { BlobType } from '../../file-uploader/types/blob.type';
import ImageItem from '../image-item/image-item.component';
import styles from './image-list.style';

export interface ImageListComponentProps {
    data: Array<ImageBlobType>;
}
const ImageListComponent: React.SFC<ImageListComponentProps> = (props: ImageListComponentProps) => {
    
     const renderList = (): JSX.Element[] | undefined => {
         if (props.data.length > 0) {
            return props.data.map((blob: BlobType, index: number) => {
                    return (
                        <div style={styles.item} key={index}>
                          <ImageItem url={blob.preview}/>
                        </div>);
             });
         }
         return undefined;
     };
     return (
         <div style={styles.list}>
              {renderList()}
         </div>
     );

};

export default ImageListComponent;