import React from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import EmailInputController from './InputControllers/EmailInputController';

export default function LoginComponent(): JSX.Element {
  const Component = EmailInputController(TextField, {label: "name"});
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={8} lg={6}>
        <Component/>
      </Grid>
    </Grid>
  )
}
