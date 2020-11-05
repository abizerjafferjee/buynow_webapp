import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import Button from '@material-ui/core/Button';
import { shortenText } from '../libs/helpers'

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
	}
}));

export default function LinkCard({ link, linkId, editLink, stageLink, showStageButton, ...rest }) {

	const classes = useStyles();

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
							{shortenText(link.name, 22)}
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
				{link.url !== undefined && (
					<Typography variant="body2" component="p" noWrap>
						<LinkTwoToneIcon/> <a href={link.url}>{link.url}</a>
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
