import React, {useEffect, useState } from 'react'
import { startFirebaseUI } from '../libs/firebase'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CssBaseline, Typography, Container, Grid, Card, CardContent } from '@material-ui/core';
import signupImage from '../assets/images/1280X800-page-001.jpg'


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
	content: {
		height: '350px',
		minWidth: '100%',
		marginTop: theme.spacing(2)
	}
}));

function SignIn() {

	const classes = useStyles();

	useEffect(() => {
		startFirebaseUI('#firebaseui-auth-container')
	}, [])

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={7}>
					<div className={classes.paper}>
						<img width="720" height="450" src={signupImage} />
					</div>
				</Grid>

				<Grid item xs>
					<CssBaseline />
					<div className={classes.paper}>
								<Avatar className={classes.avatar} />
								<Typography component="h1" variant="h5">
									Register or Sign In
								</Typography>
						<Card className={classes.content}>
							<CardContent>
								<div id="firebaseui-auth-container" className={classes.firebaseForm}></div>
							</CardContent>
						</Card>
					</div>
				</Grid>

			</Grid>
		</div>
	)
}

export default SignIn