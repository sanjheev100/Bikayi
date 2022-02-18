import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = ({ winner }) => {
  const { year, category, laureate } = winner
  return (
    <Card className='my-3 p-3 rounded shadow-lg ' style={{ minHeight: '25em' }}>
      <br />
      <br />
      <Card.Title>
        <p className='text-center' style={{ color: 'black' }}>
          <strong> Name :</strong> {laureate.firstname} {laureate.surname}
        </p>
      </Card.Title>

      {/* style={{ backgroundColor: '#cde3f0' }} */}
      <Card.Body className='text-center'>
        <Card.Text>
          <strong>ID :</strong> {laureate.id}
        </Card.Text>
        <Card.Text>
          <strong>Category :</strong> {category}
        </Card.Text>

        <Card.Text>
          <strong>year :</strong> {year}
        </Card.Text>
        <Card.Text>
          <strong>Motivation :</strong>{' '}
          {laureate.motivation.slice(0, 60) + '...'}
        </Card.Text>

        <br />
      </Card.Body>
    </Card>
  )
}

export default UserCard
