import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { validURL, getData, handleError } from '../libs/helpers'
import { useAppContext } from "../libs/contextLib";
import { database } from '../libs/firebase'

import LinkGrid from '../components/LinkGrid'
import StageGrid from '../components/StageGrid'
import GoLiveForm from '../components/GoLiveForm'
import LinkFormModal from '../components/LinkFormModal'

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		borderRadius: '5%',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 1, 1),
	},
	container: {
		marginTop: theme.spacing(2)
	}
}));

function LiveStage(props) {
	const classes = useStyles()
	const { userId } = useAppContext()

	const [openModal, setOpenModal] = useState(false)
	const [streamUrl, setStreamUrl] = useState('')
	const [showStage, setShowStage] = useState(false)
	const [stagedLinks, setStagedLinks] = useState({})
	const [links, setLinks] = useState({})
	const [linkToEdit, setLinkToEdit] = useState(null)
	const [activeLink, setActiveLink] = useState('')

	const linksRef = database.ref(`links/${userId}`)
	const streamRef = database.ref(`streams/${userId}/active`)
	const modifyStreamRef = database.ref(`streams/${userId}/active`)
	const streamMetaRef = database.ref('stream_meta')
	
	useEffect(() => {
		// listen for changes in links
		linksRef.on('value', function(snapshot) {
			const data = snapshot.val()
			setLinks(data)
		}, function(error) {
			handleError(error)
		})

		// listen for changes in stream
		streamRef.on('value', function(snapshot) {
			const data = snapshot.val()
			prepareStage(data)
		}, function(error) {
			handleError(error)
		})

		return () => {
			linksRef.off()
			streamRef.off()
		};
	}, []);

	// function onLoad() {
	// 	// listen for changes in links
	// 	getData(linksRef)
	// 	.then(data => setLinks(data))
	// 	.catch(error => handleError(error))

	// 	// listen for changes in stream
	// 	getData(streamRef)
	// 	.then(data => prepareStage(data))
	// 	.catch(error => handleError(error))
	// }

	function prepareStage(data) {
		if (data === null) {
			setStreamUrl("")
			setShowStage(false)
		} else if (!_.isUndefined(data.stream)) {
			setStreamUrl(data.stream)
			setShowStage(true)
			if (!_.isUndefined(data.stage)){
				getStagedLinks(data.stage)
			}
		}
	}

	async function getStagedLinks(stageData) {
		const linkIds = Object.keys(stageData)
		linksRef.once('value')
		.then(snapshot => {
			const stagedLinks = _.pickBy(snapshot.val(), function(link, linkId) {
				if (linkIds.includes(linkId)) {
					link['active'] = stageData[linkId].active
					if (stageData[linkId].active) {
						setActiveLink(linkId)
					}
					return link
				}
			})
			setStagedLinks(stagedLinks)
		})
	}

	function goLive(e) {
		e.preventDefault()
		if (validURL(streamUrl)) {
			createStreamMeta()
			.then(createStream())
			.then(setShowStage(true))
			.catch((error)=>handleError(error))
		}
	}

	function createStreamMeta() {
		var newMetaRef = streamMetaRef.push()
		return newMetaRef.set({
			uid: userId,
			stream: streamUrl
		})
	}

	function createStream() {
		return modifyStreamRef.update({
			stream: streamUrl
		})
	}

	function endLive(e) {
		e.preventDefault()
		modifyStreamRef.remove()
	}

	function addLinkToStage(linkId) {
		var updates = {}
		updates[`stage/${linkId}/active`] = false 
		modifyStreamRef.update(updates)
	}

	function removeLinkFromStage(linkId) {
		const streamLinkRef = database.ref(`streams/${userId}/active/stage/${linkId}`)
		streamLinkRef.remove()
		.catch(error=>handleError(error))
	}

	function showProduct(linkId) {
		var updates = {}
		if (activeLink !== '') {
			updates[`stage/${activeLink}/active`] = false
		}
		updates[`stage/${linkId}/active`] = true
		modifyStreamRef.update(updates)
	}
	
	function editLink(linkId, link) {
		setLinkToEdit({linkId, link})
		setOpenModal(true)
	}

	function closeModal() {
		setLinkToEdit(null)
		setOpenModal(false)	
	}
	
	return (
		<React.Fragment>

			<GoLiveForm
				goLive={goLive}
				setStreamUrl={setStreamUrl}
				showStage={showStage}
			/>
			
			<div className={classes.container}>
				<StageGrid 
					showStage={showStage}
					links={stagedLinks}
					makeLinkLive={showProduct}
					unstageLink={removeLinkFromStage}
					streamUrl={streamUrl}
					endLive={endLive}
				/>
			</div>

			<LinkGrid
				links={links}
				openLinkForm={setOpenModal}
				editLink={editLink}
				stageLink={addLinkToStage}
				showStage={showStage}
			/>

			<LinkFormModal 
				openModal={openModal}
				closeModal={closeModal}
				editLink={linkToEdit}
			/>

		</React.Fragment>
	)
}

export default LiveStage