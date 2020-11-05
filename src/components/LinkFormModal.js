import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'

import LinkForm from '../components/LinkForm'

function getModalStyle() {
    const top = 50
    const left = 50
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 1, 1),
	},
}));

function LinkFormModal({ openModal, closeModal, editLink }) {

    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle);
    
    return (
        <Modal
            open={openModal}
            onClose={() => closeModal()}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                <div style={modalStyle} className={classes.paper}>
                    <LinkForm 
                        linkObj={editLink}
                        closeModal={closeModal}
                    />
                </div>
        </Modal>
    )
}

export default LinkFormModal