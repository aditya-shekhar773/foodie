import React from 'react'
import Item from './Item'
import data from '../data/products.json'

const ItemPhoto = (props) => {
    const handleClick = (data) =>{
        props.handleClick(data);
    }
  return (
    <div className='grid grid-cols-4 gap-1 pb-0 pr-0 overflow-auto'>
        {
            data.map((data,key) =>{
                return(
                    <button className='p-0'>

                    <Item key={key} handleClick={(data)=>handleClick(data)} data={data} name={data.name} img={data.img} price={data.price} />
                  </button>
                )
            })
        }
    </div>
  )
}

export default ItemPhoto