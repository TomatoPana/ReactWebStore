import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';

export default function EmailInputController(InputComponent: typeof TextField, props: TextFieldProps){
  return class extends Component {
    verifyEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    }
    render() {
      return (
        <InputComponent label={props.label} onChange={this.verifyEmail.bind(this)}>
        </InputComponent>
      )
    }
  }
}