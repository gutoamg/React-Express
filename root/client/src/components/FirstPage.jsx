import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import sgslogo from '../SGSCO-logo.png'
import largeImg from '../long-exposure.jpg'

const FirstPage = ({ backenddata, textColor }) => {
	let menuHeight = 70;
	let firstTitle = 80;

	// Media query
	if (window.innerWidth <= 600)
		firstTitle = 50;

	const headerStyles = {
		width: '100%',
		height: `${menuHeight}px`,
		display: 'block',
		position: 'relative',
		top: '0px',
		left: '0px',
		// backgroundColor: '#2d2a26'
		backgroundColor: 'black'
	}

	const sgsLogoStyles = {
		width: 'auto',
		height: '50%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	}

	const firstSectionStyles = {
		width: '100%',
		height: `${window.innerHeight}px`,
		position: 'relative',
		top: '0px',
		left: '0px'
	}

	const firstImageStyles = {
		width: '100%',
		height: `${window.innerHeight - menuHeight}px`,
		position: 'relative',
		backgroundColor: '#2d2a26',
		filter: 'sepia(100%) brightness(35%)',
		objectFit: 'cover',
		background: 'no-repeat center center fixed',
		WebkitBackgroundSize: 'cover',
		MozBackgroundSize: 'cover',
		OBackgroundSize: 'cover',
		backgroundSize: 'cover'
	}

	const SGSmessage = {
		width: '100%',
		maxWidth: '800px',
		minHeight: '200px',
		position: 'absolute',
		top: '55%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '5px',
		backgroundColor: 'transparent'
	}

	const SGSmessageTitle = {
		width: '100%',
		minHeight: `${firstTitle}px`,
		lineHeight: `${firstTitle}px`,
		position: 'relative',
		marginTop: '10px',
		fontFamily: 'montserat',
		fontSize: `${firstTitle}px`,
		color: 'white',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		textAlign: 'center'
	}

	const SGSmessageSubtitle = {
		width: '90%',
		minHeight: '25px',
		lineHeight: '25px',
		position: 'relative',
		margin: '30px 5% 0px 5%',
		fontFamily: 'montserat',
		fontSize: '25px',
		color: 'white',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		textAlign: 'center'
	}

	return (
		<section style={firstSectionStyles}>
			<div style={headerStyles}>
				<img src={sgslogo} style={sgsLogoStyles} alt="SGS logo"/>
			</div>
			<img src={largeImg} style={firstImageStyles} alt="Long exposure road image" />
			<div style={SGSmessage}>
				<p style={SGSmessageTitle}>Creating dynamic momentum</p>
				<p style={SGSmessageSubtitle}>
					We bring complementary and comprehensive expertise together 
					into a single, seamless experience that creates real impact.
				</p>
			</div>
		</section>
	)
}

// Attributes default values for the props
// FirstPage.defaultProps = {
//     backenddata: {defaultUser: 'Yes is default'},
//     textColor: "red"
// }

// // Specifies the type to be attributed to each prop
// FirstPage.propTypes = {
//     textColor: PropTypes.string.isRequired
// }

export default FirstPage