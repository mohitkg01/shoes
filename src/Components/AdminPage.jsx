import React from 'react'
import './Admin.css'

const AdminPage = () => {
  return (
    <div className='admin'>
        <label htmlFor="">Product name</label>
        <input type="text" />
        <label htmlFor="">Quantity</label>
        <input type="number" />
        <label htmlFor="">Price</label>
        <input type="number" />
        <label htmlFor="">Size</label>
        <select name="size" id="">
            <option value="M">M</option>
            <option value="S">S</option>
            <option value="L">L</option>
        </select>
        <button>Add Item</button>
    </div>
  )
}

export default AdminPage