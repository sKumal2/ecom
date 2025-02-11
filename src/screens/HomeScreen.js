import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product  from '../components/product'

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* As we are using react-component named Product so we are getting rid of this<h3>{product.name}</h3> */}
                <Product product={product}/>
            </Col>
        ))}
      </Row>
    </div> 
  )
}

export default HomeScreen
