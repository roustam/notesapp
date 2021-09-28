import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = state => {
  console.log('state -->', state)
  return state
}

export default connect(mapStateToProps, null)(ItemList)