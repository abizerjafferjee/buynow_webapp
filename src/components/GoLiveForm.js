import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, FormControl, FormGroup, FormHelperText, TextField } from '@material-ui/core'
import { validURL } from '../libs/helpers'

const useStyles = makeStyles((theme) => ({
	formInput: {
		labelPlacement:"start",
        marginRight: theme.spacing(1),
        minWidth: '80%',
        [theme.breakpoints.up('md')]: {
            minWidth: '60%'
        }
	},
	formGroup: {
		display:'flex',
		flexDirection:'row',
        justifyContent:'left',
        width: '100%',
    },
    formControl: {
        width: '100%'
    },
    formButton: {
        margin: theme.spacing(1)
    },
    helperText: {
        color: 'red',
        fontSize: '12px'
    },
	container: {
        marginTop: theme.spacing(2),
    },
    text: {
        fontWeight: "lighter",
    }
}));

function GoLiveForm({ goLive, streamUrl, setStreamUrl, showStage, ...rest }) {
    const classes = useStyles()
    const [error, showError] = useState(false)

    function handleSubmit() {
        if (validURL(streamUrl, true)) {
            showError(false)
            goLive()
        } else {
            showError(true)
        }
    }

    return (
        <React.Fragment>
        {!showStage && (
            <div className={classes.container}>
                <Typography variant="h6" gutterBottom className={classes.text}>
                    Which Youtube livestream URL would you like the links to be displayed on?
                </Typography>
                <FormControl className={classes.formControl}>
                    <FormGroup className={classes.formGroup}>
                        <TextField
                            variant='filled'
                            type="text"
                            label="Youtube Livestream URL"
                            placeholder="www.youtube.com/jdnadkjnfj"
                            margin="dense"
                            required
                            autoFocus
                            color="primary"
                            className={classes.formInput}
                            onChange={e => setStreamUrl(e.target.value)}
                        />
                        <Button 
                            variant="contained"
                            onClick={()=>handleSubmit()}
                            color="primary"
                            className={classes.formButton}>
                            Go Live
                        </Button>
                    </FormGroup>
                    <FormHelperText error={error} className={classes.helperText}>
                        {error ? 'Not a valid stream URL. Must be a Youtube livestream URL.' : ''}
                    </FormHelperText>
                </FormControl>
            </div>        
        )}
        </React.Fragment>
    )
}

export default GoLiveForm