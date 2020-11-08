import React from 'react';
import _ from 'lodash'
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
		display: 'flex',
		width: '300px',
		height: '125px',
		borderRadius: '5%'
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
	details: {
		display: 'flex',
		width: '175px',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
			width: '125px',
			height: '125px'
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
}));

export default function StageCard({ link, linkId, unstageLink, makeLinkLive, ...rest }) {

	const classes = useStyles();

 	return (
		<Card className={classes.root}>
      		<div className={classes.details}>
				<CardContent className={classes.content}>
					{!_.isUndefined(link) && (
						<Typography variant="inherit">
							{shortenText(link.name, 30)}
						</Typography>
					)}
					{!_.isUndefined(link.url) && (
						<Typography variant="body2" component="p" noWrap>
							<LinkTwoToneIcon/> <a href={link.url}>{shortenText(link.url, 20)}</a>
						</Typography>
					)}
				</CardContent>

				<div className={classes.controls}>
					<Button 
						size='small'
						color='primary'
						onClick={() => unstageLink(linkId)}>
						Remove
					</Button>
					<Button
						size='small' 
						color='primary'
						variant='contained'
						disabled={link.active}
						onClick={() => makeLinkLive(linkId)}>
						Show
					</Button>
        		</div>
      		</div>
			
			<img
				className={classes.cover}
				src={!_.isUndefined(link.image) ? 
						link.image :
						require('../assets/images/default-image.jpg')
					}
			/>
    	</Card>
  	)
}
