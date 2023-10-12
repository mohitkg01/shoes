import React from 'react'
import './Item.css'

const Input =React.forwardRef((props,ref) => {
  return (
    <div>
        <label htmlFor={props.input.id}>quantity</label>
        <input  ref={ref}{...props.input}/>
    </div>
  )
})

export default Input