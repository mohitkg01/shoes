import React, { useState } from 'react'
import Item from './Item';
const dummyData=[
    {   id:1,
        name:'nike',
        price:5000,
        size:'M'
    },
    {   id:2,
        name:'addidas',
        price:5000,
        size:'L'
    },
    {   id:3,
        name:'Puma',
        price:4000,
        size:'M'
    }, {   id:4,
        name:'Air',
        price:6000,
        size:'M'
    },
    {   id:5,
        name:'Campus',
        price:5000,
        size:'M'
    },
    {   id:6,
        name:'Spark',
        price:5000,
        size:'S'
    }, {   id:7,
        name:'Air',
        price:6000,
        size:'M'
    },
    {   id:8,
        name:'Campus',
        price:5000,
        size:'M'
    },
    {   id:9,
        name:'Spark',
        price:5000,
        size:'S'
    }

]


const Data = (props) => {

    const store=dummyData.map(i=>
        <Item key={i.id} name={i.name}
         price={i.price}/>);
   
  return (
        <div>
            <ul>{store}</ul>
        </div>
        
  )
}

export default Data