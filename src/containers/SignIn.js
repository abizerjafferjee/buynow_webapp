import React, {useEffect, useState } from 'react'
import { startFirebaseUI } from '../libs/firebase'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CssBaseline, Typography, Container } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
		alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
	},
	firebaseForm: {
		margin: theme.spacing(2)
	},
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn() {

	const classes = useStyles();

	useEffect(() => {
		startFirebaseUI('#firebaseui-auth-container')
	}, [])

	return (
		<React.Fragment>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						{/* <LockOutlinedIcon /> */}
					</Avatar>
					<Typography component="h1" variant="h5">
						Register or Sign In
					</Typography>
					<div id="firebaseui-auth-container" className={classes.firebaseForm}></div>
				</div>
			</Container>
		</React.Fragment>
	)
}

export default SignIn