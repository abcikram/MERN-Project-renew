import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/products/${encodeURIComponent(id)}`).then((response) => {

      setProduct(response.data)
    })

  }, [id])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup >
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>
              Price : ₹{product.price}
            </ListGroupItem>
            <ListGroupItem>
              description : {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroupItem>
              <Row>
                <Col>
                  price:-
                </Col>
                <Col>
                  <strong>₹{product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col>status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className="btn-block" type="button"
                disabled={product.countInStock === 0}>Add To Card
              </Button>
            </ListGroupItem>
          </Card>
          
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen