import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { Button, IconButton, Typography, CardActions, CardContent, CardHeader, Card } from '@material-ui/core';

import { shortenText } from '../libs/helpers'
import { useAppContext } from "../libs/contextLib";

const useStyles = makeStyles((theme) => ({
  root: {
		width: '240px',
		height: '390px',
		borderRadius: '5%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
	},
	title: {
		float: 'left',
		display: 'inline'
	},
	price: {
		float: 'right',
		display: 'inline'
	},
	cardSection: {
		display: 'block',
		marginBottom: theme.spacing(3),
		fontWeight: 'bold'
	},
	image: {
		width: '100%',
		height: '240px'
	},
	action: {
		position: 'absolute',
		top: '0%',
		left: '0%',
		transform: 'translate(250%, 0%)',
	},
	imageContainer: {
		position: 'relative',
	},
	stageButton: {
		marginTop: '0px',
	},
	content: {
		marginBottom: '0px',
		height: '110px'
	},
	copy: {
		color: 'blue',
		'&:hover': {
			cursor: 'pointer',
		}
	}
}));

export default function LinkCard({ link, linkId, editLink, stageLink, showStageButton, copyLink, ...rest }) {
	
	const classes = useStyles();
	const { userId } = useAppContext()

	const [openModal, setOpenModal] = useState(false)

	function getGenie24Link() {
		return `https://app.genie24.ca/${userId}/${link.product_id}`
	}

  return (
		<Card className={classes.root}>
			<div className={classes.imageContainer}>
				{link.image ? 
					<img className={classes.image} src={link.image}/>:
					<img className={classes.image} src={require('../assets/images/default-image.jpg')}/>
				}

				<CardHeader
					className={classes.action}
					action={
						<IconButton 
							onClick={() => editLink(linkId, link)}
							aria-label="settings">
							<EditTwoToneIcon />
						</IconButton>
					}
				/>
			</div>

			<CardContent className={classes.content}>
				{link !== undefined && (
					<div className={classes.cardSection}>
						<Typography variant='inherit' className={classes.title}>
							<a href={link.url}>{shortenText(link.name, 15)}</a>
						</Typography>
						{link.price !== undefined && (<Typography variant='inherit' className={classes.price}>
							{link.price}
						</Typography>)}
					</div>
				)}
				{link.description !== undefined && (
					<Typography variant="body1" color="textSecondary" component="p">
						{shortenText(link.description, 56)}
					</Typography>
				)}
				{link.product_id !== undefined && (
					<Typography variant="body1" component="p" className={classes.copy} onClick={()=>copyLink(getGenie24Link())}>
						<LinkTwoToneIcon/> copy genie24 link
					</Typography>
				)}
			</CardContent>

			<CardActions disableSpacing className={classes.stageButton}>
				{showStageButton && (
					<Button size="small" color="primary" onClick={() => stageLink(linkId, link)}>
						Stage
					</Button>
				)}
			</CardActions>
		</Card>
  );
}
