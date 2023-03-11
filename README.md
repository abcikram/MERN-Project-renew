
10-3-2023

In Header.js :-

In Header.js we are using :-
className="navbar navbar-expand-sm bg-dark navbar-dark" for navbar dark background-color 

<Nav className="d-flex ms-auto order-5"> and use for card and login text shift for right side


In src/Product.js :-

import { Link } from 'react-router-dom'
Create Link router for single page application .


In src/Header.js :-
1.we install react-router-bootstrap
    npm i react-router-bootstrap


import { LinkContainer } from 'react-router-bootstrap'
 <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>Pro Shop</Navbar.Brand>
</LinkContainer>

we are remove href and import {linkContainer} and use for create single page application.

////======================================== day- 1 =========================================/
2.ProductScreen.js:-

import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Row,Col,Image, ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap'
import products from '../products'

const ProductScreen = () => {
  const params = useParams();
  const product = products.find((p) => p._id === params.id)
  return (
    <>
    <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
      </Col>
      <Col md={3}>
            <ListGroup >
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
            </ListGroup>
      </Col>
    </Row>
      
    </>
  )
}

export default ProductScreen

//The component ProductScreen doesn't get passed any match prop. Therefore, when you try to access params.id it will throw error because it is not possible to read properties of an undefined object. This is probably why you get white screen crash.

Since ProductScreen is a functional component, you can use React Router hook instead of passing match via props. Either useRouteMatch() or useParams().



*****topic :-
spacing :-

m - for classes that set margin
p - for classes that set padding
Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto


//======================================================================================