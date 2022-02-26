
import React from 'react';

const Card = ({ item }) => {
  return (<>
  <div className='w-28 lg:w-9/12 lg:h-56 bg-slate rounded-md  shadow-md'> 
  <img className='w-16 translate-x-6 -translate-y-3.5 lg:w-24 lg:translate-x-8 lg:-translate-y-12'  src={item.img} alt="" />
 <h1 className='text-sky-400  lg:text-center'>{item.name}</h1></div>
  </>);
};

export default Card;
