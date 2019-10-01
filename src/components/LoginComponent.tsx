import React from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import EmailInputController from './InputControllers/EmailInputController';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    }
  }),
);

export default function LoginComponent(): JSX.Element {
  //const Component = EmailInputController(TextField, {label: "name"});
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item sm={12} md={8} lg={4}>
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          placeholder="someone@example.com"
          className={classes.textField}
          helperText="Enter a valid Email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item sm={12} md={8} lg={4}>
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          className={classes.textField}
          helperText="Enter a password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}
