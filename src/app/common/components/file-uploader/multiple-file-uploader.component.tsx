import * as React from 'react';
import DropZone from 'react-dropzone';
import axios from 'axios';
import { BlobType } from './types/blob.type';
import { FilesToUploadDispatcherType } from './dispatchers/file-upload.action-dispatcher.type';
import ImageListComponent from '../image-components/image-list/image-list.component';
import { BlobCollection } from './types/blob.collection';
import  styles  from './styles';

export interface FilesProps {
    data: Array<BlobType>;
}

const { Component } = React;
class MultipleFileUploaderComponent extends 
Component<FilesProps & FilesToUploadDispatcherType, Array<BlobType>> {

    constructor(props: FilesProps & FilesToUploadDispatcherType) {
       super(props);
       this.onDrop = this.onDrop.bind(this);
    }

    dispatchUpdateFilesToUpload = (files: BlobType[]) => {

        if (files) {
            const blobCollection = new BlobCollection(files);
         
            this.props.updateFilesToUpload(blobCollection.Blobs);
        }
        
    }

    onDrop =  (acceptedFiles: any) => {
        const cloudName = 'dpd8g4u3c';   // const filesToUpload = files.map((file: BlobType) => {
            //     const blob: BlobType = {
            //         ...file,
            //         name: file.name,
            //         lastModified: file.lastModified,
            //         lastModifiedDate: file.lastModifiedDate,
            //         preview: file.preview,
            //         size: file.size,
            //         type: file.type
            //     };
            //     return blob;
            // });
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
        console.log('--this.props.data', this.props.data);
        return(
            <div style={styles.uploadContainer}>
              <div style={styles.fileInput}>
                <DropZone style={{height: '100px'}} onDrop={this.onDrop}>
                    click to upload files
                </DropZone>
              </div>
              {<ImageListComponent  data={this.props.data} />}
            </div>
        );
    }

}

export default MultipleFileUploaderComponent;
