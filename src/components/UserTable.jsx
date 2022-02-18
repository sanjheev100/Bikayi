import React from 'react'

const UserTabel = ({ user }) => {
  return (
    <tr>
      <td className='text-center' style={{ width: '50px', padding: '20px' }}>
        {user.id}
      </td>
      <td
        className='text-center'
        style={{ width: '10px', padding: '15px 5px' }}
      >
        {user.firstname}
      </td>
      <td
        className='text-center'
        style={{ width: '10px', padding: '15px 5px' }}
      >
        {user.surname}
      </td>
      <td
        className='text-center'
        style={{ width: '10px', padding: '15px 5px' }}
      >
        {user.category}
      </td>
      <td
        className='text-center'
        style={{ width: '10px', padding: '15px 5px' }}
      >
        {user.year}
      </td>
      <td
        className='text-center'
        style={{ width: '10px', padding: '15px 5px' }}
      >
        {user.motivation}
      </td>
      <td
        className='text-center'
        style={{ width: '10px', padding: '15px 5px' }}
      >
        {user.share}
      </td>
    </tr>
  )
}

export default UserTabel
