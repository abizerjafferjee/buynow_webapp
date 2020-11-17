import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'

function getModalStyle(width) {
    const top = 50
    const left = 50
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        width: width,
    };
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 1, 1),
    },
    root: {
    }
}));

function ModalObj({ children, ...rest }) {

    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle(rest.width));
    
    return (
        <Modal
            open={rest.openModal}
            onClose={() => rest.closeModal()}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.root}
        >
            <div style={modalStyle} className={classes.paper}>
                { children }
            </div>
        </Modal>
    )
}

export default ModalObj