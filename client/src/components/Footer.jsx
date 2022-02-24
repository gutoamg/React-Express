import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    let firstTitle = 60;

	// Media query
	if (window.innerWidth <= 600)
		firstTitle = 40;

    const footerStyles = {
        width: '100%',
        minHeight: '300px',
        position: 'relative',
        backgroundColor: '2d2a26',
        paddingTop: '1px'
    }

    const connectTitle = {
		width: '100%',
		minHeight: `${firstTitle}px`,
		lineHeight: `${firstTitle}px`,
		position: 'relative',
		marginTop: '80px',
		fontFamily: 'montserat',
		fontSize: `${firstTitle}px`,
		color: 'white',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		textAlign: 'center'
	}

	const connectSubtitle = {
		width: '80%',
		maxWidth: '700px',
		minHeight: '18px',
		lineHeight: '22px',
		position: 'relative',
		transform: 'translateX(-50%)',
		left: '50%',
		marginTop: '10px',
		fontFamily: 'montserat',
		fontSize: '18px',
		color: 'white',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		textAlign: 'center'
	}

    const contactBtnStyles = {
        display: 'block',
        width: '250px',
        height: '50px',
        position: 'relative',
        transform: 'translateX(-50%)',
        left: '50%',
        marginTop: '30px',
        marginBottom: '30px',
        borderRadius: '10px',
        backgroundColor: '#e80000',
        textDecoration: 'none',
        fontFamily: 'montserat',
		fontSize: '18px',
        lineHeight: '50px',
		color: 'white',
		textAlign: 'center'
    }

    return (
        <section style={footerStyles}>
            <p style={connectTitle}>Connect with us</p>
            <p style={connectSubtitle}>We're ready! Are you ?</p>
            <a style={contactBtnStyles} href='https://www.sgsco.com/contact'>Contact</a>
        </section>
    )
}

export default Footer