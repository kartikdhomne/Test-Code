import React from 'react'
import  Card  from './Card'

 const Cardlist = ({posts}) => {
  return (
    <div className='cardlist'>
        {posts.map((post)=>{
            return <Card post={post}/>
        })}
    </div>
  )
}
export default Cardlist;