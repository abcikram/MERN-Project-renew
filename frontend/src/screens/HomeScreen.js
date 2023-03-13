import React ,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'



const HomeScreen = () => {
  const [products,setProducts] = useState([])
  
  useEffect(() =>{
      axios.get('api/products').then((response) => {

        setProducts(response.data)
      })
    }
  ,[])

  return (
    <>
      <h1>
        <br />
        Latest products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen;