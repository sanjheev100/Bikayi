import React from 'react'
import pagenotfoundImage from '../images/pagenotfound.jpg'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
const PageNotFound = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1 style={{ color: 'black' }}>Oops..! 404 Page Not Found</h1>

          <img
            src={pagenotfoundImage}
            height='300'
            width='300'
            alt='not found'
          />
          <br />
          <br />
          <br />
          <Link to='/'>
            <Button>Go Back</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default PageNotFound
