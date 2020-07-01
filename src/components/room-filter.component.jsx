import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './title.component'

const getUnique= (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({rooms}) => {
    const context= useContext(RoomContext)
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context
    let types= getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => {
        return <option key= {index} value={item}>{item}</option>
    })
    return <section className="fiter-container">
        <Title title="search rooms" />
        <form className="filter-form">
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                </select>
            </div>
        </form>
    </section>
}

export default RoomFilter