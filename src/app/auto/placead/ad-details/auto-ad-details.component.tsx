import * as React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { AutoAdDetailsType } from './types';
import { AutoAdDetailsDispatcherType } from './action-dispatcher.types';
import Input, { InputLabel } from 'material-ui/Input';
import Card, {  CardContent } from 'material-ui/Card';

interface AdDetails {
    data: AutoAdDetailsType;
}
export default class AutoAdDetailsComponent extends
 React.Component<AdDetails & AutoAdDetailsDispatcherType, AutoAdDetailsType> {

    constructor ( props: AdDetails & AutoAdDetailsDispatcherType ) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange = (event: any) => {
         const value = event.target.value;
         console.log('event ', event, value.value);
         this.props.updateDetails({
             ...this.props.data,
            title: value,
            
         });
    }
    render() {

        return (
        <Card>
         <CardContent>  
            <FormControl>
                <h1>details</h1>

                <FormControl >
                    <InputLabel htmlFor="name-simple">Title</InputLabel>
                    <Input id="name-simple" value={this.props.data.title} onChange={this.handleTextChange} />
                    <FormHelperText>Eg Audi R8 for sale</FormHelperText>
                </FormControl>

                 <FormControl >
                    <InputLabel htmlFor="name-simple">Contact number</InputLabel>
                    <Input id="name-simple" value={this.props.data.mobile} onChange={this.handleTextChange} />
                    <FormHelperText>We will display this number on your ad</FormHelperText>
                </FormControl>

                 <FormControl >
                    <InputLabel htmlFor="name-simple">Location</InputLabel>
                    <Input id="name-simple" value={this.props.data.location} onChange={this.handleTextChange} />
                    <FormHelperText>Example Dubai Marina,Alquoz</FormHelperText>
                </FormControl>
                
                <TextField
                    id="textarea"
                    value={this.props.data.description}
                    label="Description"
                    multiline={true}
                    margin="normal"
                />

               <Button >UPDATE</Button>
            </FormControl>
           </CardContent>
          </Card>
        );
    }
}
