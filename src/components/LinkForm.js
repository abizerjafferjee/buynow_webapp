import React, { useState, useEffect } from "react";
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { CircularProgress, TextField, Snackbar, CssBaseline, Avatar, Typography, Button, Container } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { validURL } from '../libs/helpers'
import { useAppContext } from "../libs/contextLib";
import { database, storage } from '../libs/firebase'

import ImageUploadButton from './ImageUploadButton'

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	wrapper: {
		margin: theme.spacing(3),
		position: 'relative',
	},
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	formControl: {
		marginTop: theme.spacing(1),
		width: '100%',
		minWidth: 120,
	},
	submit: {
		marginBottom: theme.spacing(1),
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
}));

export default function LinkForm({ linkObj, closeModal, ...rest }) {

	const classes = useStyles();
	const { userId } = useAppContext()
	const storageRef = storage.ref()

  	const [openError, setOpenError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false)

	const [url, setUrl] = useState("")
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState("")
	const [image, setImage] = useState(null)

	const [editMode, setEditMode] = useState(false)

	useEffect(() => {
		populateForm()
	}, [])

	function populateForm() {
		if (linkObj) {
			const { linkId, link } = linkObj
			if (link) {
				if (!_.isUndefined(link.name)) {
					setName(link.name)
				}
				if (!_.isUndefined(link.url)) {
					setUrl(link.url)
				}
				if (!_.isUndefined(link.description)) {
					setDescription(link.description)
				}
				if (!_.isUndefined(link.price)) {
					setPrice(link.price)
				}
			}
			setEditMode(true)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (image) {
			if (!editMode) {
				uploadImage()
				.then(snapshot => getImageUrl())
				.then(url => createLink(url))
				.then(closeModal())
				.catch(error => console.log('error'))
			} else {
				uploadImage()
				.then(snapshot => getImageUrl())
				.then(url => updateLink(url))
				.then(closeModal())
				.catch(error => console.log('error'))
			}
		} else {
			if (!editMode) {
				createLink()
				.then(closeModal())
				.catch(error => console.log('error'))
			} else {
				updateLink()
				.then(closeModal())
				.catch(error => console.log('error'))
			}
		}
	}

	function createLink(image_url=null) {
		var linksRef = database.ref(`links/${userId}`)
		var newLinkRef = linksRef.push()
		var newLink = {
			product_id: newLinkRef.key.toLowerCase(),
			name: name,
			url: url,
			price: price,
			description: description
		}
		if (image_url) {
			newLink['image'] = image_url
		}
		return newLinkRef.set(newLink)
	}

	function updateLink(image_url=null) {
		const { linkId, link } = linkObj
		var linksRef = database.ref(`links/${userId}/${linkId}`)
		var update = {
			name: name,
			url: url,
			price: price,
			description: description
		}
		if (image_url) {
			update['image'] = image_url 
		}
		return linksRef.update(update)
	}

	function deleteLink(e) {
		e.preventDefault()
		const { linkId, link } = linkObj
		var linkRef = database.ref(`links/${userId}/${linkId}`)
		linkRef.remove()
		.then(closeModal())
		.catch(error => console.log(error))
	}

	function validateForm() {
		return validURL(url) && (name !== "")
	}

	function uploadImage() {
		const path = `link_images/${image.name}`
		const imageRef = storageRef.child(path)
		return imageRef.put(image)
	}

	function getImageUrl() {
		const path = `link_images/${image.name}`
		const imageRef = storageRef.child(path)
		return imageRef.getDownloadURL()
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenError(false);
  	}

	return (
		<React.Fragment>
			<CssBaseline/>
			<Container maxWidth='xs'>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<AddCircleIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{!editMode ? 'Add' : 'Update'} Product Link
					</Typography>
					<form onSubmit={handleSubmit} className={classes.form}>
						<TextField
							variant='outlined'
							type="text"
							label="Product Url"
							margin="normal"
							value={url}
							fullWidth={true}
							required
							onChange={e => setUrl(e.target.value)}
						/>
						<TextField
							variant='outlined'
							type="text"
							label="Product Name"
							margin="normal"
							value={name}
							fullWidth={true}
							required
							onChange={e => setName(e.target.value)}
						/>
						<TextField
							variant='outlined'
							type="text"
							label="Description"
							margin="normal"
							value={description}
							multiline
							rows={3}
							fullWidth={true}
							onChange={e => setDescription(e.target.value)}
						/>
						<TextField
							variant='outlined'
							type="text"
							label="Price"
							margin="normal"
							value={price}
							fullWidth={true}
							onChange={e => setPrice(e.target.value)}
						/>
						<ImageUploadButton
							imageName={image !== null ? image.name : ''} 
							setImage={setImage}
						/>
						<div className={classes.wrapper}>
							<Button
								variant='contained'
								type='submit'
								color='primary'
								fullWidth={true}
								disabled={!validateForm()}
								className={classes.submit}>
								{linkObj === null ? 'Add': 'Update'}
							</Button>
							{editMode && (
								<Button
									variant='contained'
									type='button'
									color='secondary'
									fullWidth={true}
									className={classes.submit}
									onClick={deleteLink}>
									{'Delete'}
								</Button>
							)}
							{isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
						</div>
					</form>
				</div>
				<Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="error">
						{errorMessage}
					</Alert>
				</Snackbar>
			</Container>
		</React.Fragment>
	);
}