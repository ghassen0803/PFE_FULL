import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from "./Header/logo.png"

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/* home */}
						<a
							rel='noopener noreferrer'
							href='http://www.elfouladh.com.tn/'
							target='_blank'
							className='textt'
						>
						<img src={ logo } alt="Logo" className="navbar-brand" style={{ width: "30px" } } />EL FOULADH
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
