import * as React from 'react';
import DropZone from 'react-dropzone';
import axios from 'axios';
import { BlobType } from './types/blob-type';
import { FilesToUploadDispatcherType } from './dispatchers/file-upload.action-dispatcher.type';
import ImageItem from '../image-components/image-item/image-item.component';

export interface FilesProps {
    data: Array<BlobType>;
}

const { Component } = React;
export default class MultipleFileUploaderComponent extends 
Component<FilesProps & FilesToUploadDispatcherType, Array<BlobType>> {

    constructor(props: FilesProps & FilesToUploadDispatcherType) {
       super(props);
       this.onDrop = this.onDrop.bind(this);
    }

    dispatchUpdateFilesToUpload = (files: BlobType[]) => {

        if (files) {
            const filesToUpload = files.map((file: BlobType) => {
                const blob: BlobType = {
                    ...file,
                    name: file.name,
                    lastModified: file.lastModified,
                    lastModifiedDate: file.lastModifiedDate,
                    preview: file.preview,
                    size: file.size,
                    type: file.type
                };
                return blob;
            });

            this.props.updateFilesToUpload(filesToUpload);
        }
        
    }

    onDrop =  (acceptedFiles: any) => {
        const cloudName = 'dpd8g4u3c';
        this.dispatchUpdateFilesToUpload(acceptedFiles);
        const uploaders = acceptedFiles.map(async (file: BlobType) => {
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
        const images = this.props.data.map((blob: BlobType, index: number) => {
            return (
                  <div key={index}>
                    <ImageItem url={blob.preview}/>
                  </div>);
        });
        return(
            <div>
              <DropZone onDrop={this.onDrop}>
                  click to upload files
              </DropZone>
              {
                 images 
              }
            </div>
        );
    }

}
