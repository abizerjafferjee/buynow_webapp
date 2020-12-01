import React from 'react'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Button } from '@material-ui/core'
import LinkCard from './LinkCard'

const useStyles = makeStyles((theme) => ({
	addPaper: {
		width: '240px',
		height: '390px',
		borderRadius: '5%',
        display: 'flex',
        opacity: '0.6',
        justifyContent: 'center',
        paddingTop: theme.spacing(18),
        paddingBottom: theme.spacing(18)
    },
	avatar: {
		width: 60,
        height: 60,
    },
    addIcon: {
        marginTop: theme.spacing(18),

    },
	container: {
        justifyContent: 'center',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
    },
    addButton: {
        '&:hover': {
            cursor: 'pointer',
        }
    }
}));

function LinkGrid({ links, openLinkForm, editLink, stageLink, showStage, copyLink, ...rest }) {

    const classes = useStyles()
    
    return (
        <React.Fragment>
            <div className={classes.container}>
                <Typography gutterBottom variant="h4">
                    All Product Links
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm="auto" justify="center">
                        <Paper elevation={0} className={classes.addPaper}>
                            <Button variant='text' onClick={()=>openLinkForm(true)} className={classes.addButton}>
                                Add a Link
                            </Button>
                        </Paper>
                    </Grid>
                    {_.map(links, (link, linkId) => (
                        <Grid item xs={12} sm="auto" key={linkId}>
                            <LinkCard
                                link={link}
                                linkId={linkId}
                                editLink={editLink}
                                stageLink={stageLink}
                                showStageButton={showStage}
                                copyLink={copyLink}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </React.Fragment>        
    )    
}

export default LinkGrid