import * as React from 'react';
import DropZone from 'react-dropzone';
import axios from 'axios';
import { BlobType } from './types/blob-type';
interface Props {

}
const { Component } = React;
export default class FileUploader extends Component<Props, Props> {

    constructor(props: Props) {
       super(props);
       this.onDrop = this.onDrop.bind(this);
    }

    onDrop =  (acceptedFiles: any) => {
        const cloudName = 'dpd8g4u3c';
        let files: Array<BlobType> = new Array<BlobType>();
        const uploaders = acceptedFiles.map(async (file: BlobType) => {
            files.push(file);
            console.log('--acceptedFiles', file);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'spcclqak');
            formData.append('tags', `img`);
            formData.append('api_key', '295193771695745');
            formData.append('timestamp', `${new Date().getTime()}`);
            
            const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

            const res = await axios.post(url, formData);
            console.log('--file uploaded', res);
        });

        axios.all(uploaders).then((uploader) => {
                console.log('--uploader', uploader);
        });
    }

    render() {
        return(
            <div>
              <DropZone onDrop={this.onDrop}>
                  click to upload files
              </DropZone>
            </div>
        );
    }

}
