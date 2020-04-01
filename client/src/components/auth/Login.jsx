import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { AuthService } from "../../utils/services/Auth.service";
const authService = new AuthService();
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(true);
  const [passError, setPassError] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const onChange = e => {
    const { name, value } = e.currentTarget;
    console.log(e, name, value);
    const regUser = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    switch (name) {
      case "user":
        if (regUser.test(value)) {
          setUserError(false);
          setUser(value);
        } else {
          setUserError(true);
        }
        break;
      case "password":
        if (regPass.test(value)) {
          setPassError(false);
          setPassword(value);
        } else {
          setPassError(true);
        }
        break;
    }

    if (!userError && !passError) setSubmitDisabled(false);
    else setSubmitDisabled(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    authService.login({ user, password }).then(async theUser => {
      await props.setUser(theUser);
      console.log(theUser);
      props.history.push("/");
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="on" onSubmit={onSubmit}>
      <div>
        <TextField
          onChange={onChange}
          error={userError}
          id="filled-error"
          label="user"
          name="user"
          defaultValue="E-mail"
          helperText="Incorrect entry."
          variant="filled"
          required
        />
        <TextField
          onChange={onChange}
          error={passError}
          id="filled-error"
          label="password"
          name="password"
          defaultValue="Password"
          type="password"
          helperText="Incorrect entry."
          variant="filled"
          required
        />
      </div>
      <button disabled={submitDisabled}>Login</button>
    </form>
  );
}
