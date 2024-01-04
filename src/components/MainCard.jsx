import React from 'react'
import { data } from '../Data/Data.js';
import Cards from './Cards.jsx';


const MainCard = () => {
  return (
    <div className='flex items-center h-[100vh] pt-[80px] justify-around'>
        {
            data.map((item,index) =>(
                <div key={item.id}>
                    <Cards
                    image = {item.logo}
                    title = {item.title}
                    sub_title = {item.sub_title}
                    desc = {item.desc}
                    id = {item.id}
                    button_name={item.button_name}
                    />
                </div>
            ))
        }
    </div>

  )
}

export default MainCard