import React from 'react'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import StageCard from './StageCard'

const useStyles = makeStyles((theme) => ({
	stagePlaceholder: {
		padding: theme.spacing(5),
    	display: 'flex',
    	flexDirection: 'column',
		alignItems: 'center'
    },
    stageMessageContainer: {
		display:'flex',
		flexDirection:'row',
		marginBottom: theme.spacing(1)
	},
	stageMessage: {
		marginRight: theme.spacing(1),
	},
}));

function StageGrid({ showStage, links, makeLinkLive, unstageLink, streamUrl, endLive }) {

    const classes = useStyles()
    
    return (
        <React.Fragment>

        {showStage && (
            <div>
                <Typography gutterBottom variant="h4">
                    Staged Product Links
                </Typography>
                <div className={classes.stageMessageContainer}> 
                    <Typography variant="body1" className={classes.stageMessage}>
                        Your products will be displayed on your livestream at &nbsp;
                        <a href={streamUrl}>{streamUrl}</a>
                    </Typography>
                    <Button 
                        variant="text"
                        color="secondary"
                        size="small"
                        onClick={endLive}>
                        <u>End Live</u>
                    </Button>
                </div>
            </div>
        )}

        {(showStage && _.isEmpty(links)) && (
            <Paper elevation={0}>
                <div className={classes.stagePlaceholder}>
                    <Typography variant="body1">
                        Select the product links that you want to show on your livestream and stage them here.
                    </Typography>
                </div>
            </Paper>
        )}

        {(showStage && !_.isEmpty(links)) && (
            <Grid container spacing={2} cols={5}>
                {_.map(links, (link, linkId) => {
                    return (
                        <Grid item xs={12} sm="auto" key={linkId}>
                            <StageCard 
                                link={link}
                                linkId={linkId}
                                unstageLink={unstageLink}
                                makeLinkLive={makeLinkLive}	
                                />
                        </Grid>
                    )
                })}
            </Grid>
        )}
        </React.Fragment>
    )
}

export default StageGrid