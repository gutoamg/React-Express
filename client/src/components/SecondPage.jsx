import React from 'react'
import ImagesContainer from './ImagesContainer'

const SecondPage = ({ backendData }) => {
	let firstTitle = 60;

	// Media query
	if (window.innerWidth <= 600)
		firstTitle = 40;

	const secondPageStyles = {
		width: '100%',
		height:  'auto',
		minHeight: '300px',
		position: 'relative',
		top: '0px',
		left: '0px',
		paddingBottom: '100px',
		backgroundColor: 'white',
		overflow: 'hidden'
	}

	const specializationTitle = {
		width: '100%',
		minHeight: `${firstTitle}px`,
		lineHeight: `${firstTitle}px`,
		position: 'relative',
		marginTop: '80px',
		fontFamily: 'montserat',
		fontSize: `${firstTitle}px`,
		color: '#2d2a26',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		textAlign: 'center'
	}

	const specializationSubtitle = {
		width: '80%',
		maxWidth: '700px',
		minHeight: '18px',
		lineHeight: '22px',
		position: 'relative',
		transform: 'translateX(-50%)',
		left: '50%',
		marginTop: '20px',
		fontFamily: 'montserat',
		fontSize: '18px',
		color: '#2d2a26',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		textAlign: 'center'
	}
	
	return (
		<section style={secondPageStyles}>
			<p style={specializationTitle}>Deep specialization</p>
			<p style={specializationSubtitle}>
				Across our network, we’ve got the focused expertise to 
				deliver what brands need, at any stage of the game.
			</p>
			<ImagesContainer backendData={backendData} />
		</section>
	)
}

export default SecondPage