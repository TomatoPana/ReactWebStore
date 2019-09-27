import React, { Component } from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

interface LoginState {
  name: string;
  isLogged: boolean;
  lastLogin: Date;
}

//TODO: Reuse hook component
const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    },
  });
});

class LoginComponent extends Component<{}, LoginState> {
  constructor(props: {}){
    super(props);
    this.state = {
      name: "",
      isLogged: false,
      lastLogin: new Date(),
    }
  }
  render(): JSX.Element {
    return <>
      <form>
        <TextField
          id="name"
          label="name"
        />
      </form>
    </>;
  }
}

export default LoginComponent;