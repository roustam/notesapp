import React from 'react'

function ItemList(props) {
  console.log('props --->', props)
  const { ItemList } = props
  return (
    <div>
    <p>posts list</p>
    <ul>
      {ItemList.map(el=>(
        <li>{el}</li>
      ))}
    </ul>
    </div>
  )
}

export default ItemList

