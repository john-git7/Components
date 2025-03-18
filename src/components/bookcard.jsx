// write the book component code here
import React from 'react'

function Bookcard({name,genre,author,image}) {
  return (
    <div>
        <div>
        <strong>Book:-</strong>{name}
        </div>
        <div><strong>Genre:-</strong> {genre}</div>
        <div><strong>Author:-</strong>{author}</div>
        <div><img src={image} /></div>
    </div>
  )
}

export default Bookcard