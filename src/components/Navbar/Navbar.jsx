import React from 'react';
import logo from '../../images/E-books.png'
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
      <>
      
    <header className="bg-gray-100 h-12">

        <div className='flex justify-between'> 
        <img className=" w-16 h-12 p-4 mt-1" src={logo} alt={logo} />
        <nav class="mt-3 p-2 justify-around flex w-full">
       
           
        <ul class="flex mt-0  space-x-4">
          <li className="text-sky-500">Home</li>
          <li className="text-sky-500">Books</li>
          <li className="text-sky-500">AboutUs</li>
        </ul>
        </nav>
    <span className='text-gray-900 p-4'><SearchIcon /></span>
        </div>

    </header>

      
      </>
  )
};

export default Navbar;
