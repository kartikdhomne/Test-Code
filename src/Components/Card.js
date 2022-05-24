import React from 'react'

 const Card = ({post}) => {
  return (
    <div className='card'>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
    </div>
  )
}
export default Card;