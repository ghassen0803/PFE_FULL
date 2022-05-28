import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProductsByF } from '../actions/productActions'

const ScreenByF = ({ match }) => {
	const keyword = match.params.keyword

	const pageNumber = match.params.pageNumber || 1
	const id = match.params.id

	

	const dispatch = useDispatch()

	// useSelector is to grab what we want from the state
	const productList = useSelector((state) => state.productList)
	const { loading, error, products, page, pages } = productList

	// make request here upon component load
	useEffect(
		() => {
			// Fire off action to get the products
			dispatch(listProductsByF(id))
		},
		[dispatch,id] // Dependencies, on change they fire off useEffect
	)
	return (
		<>
			<Meta />

			
			{/* When loading, display Loading...
            On error, display error
            Else display the products */}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md='6' lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
			
					
				</>
			)}
		</>
	)
}


export default ScreenByF
