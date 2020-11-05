import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, FormControl, FormGroup, FormLabel, FormHelperText, TextField } from '@material-ui/core'

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

function GoLiveForm({ goLive, setStreamUrl, showStage, ...rest }) {
    const classes = useStyles()

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
                            onClick={goLive}
                            color="primary"
                            className={classes.formButton}>
                            Go Live
                        </Button>
                    </FormGroup>
                    <FormHelperText className={classes.helperText}>{'Not a valid stream URL.'}</FormHelperText>
                </FormControl>
            </div>        
        )}
        </React.Fragment>
    )
}

export default GoLiveForm