import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return ( 
        <div className='grid grid-flow-col p-2 m-2 shadow'>
            <div className='flex col-span-1'>
                <img onClick = {() => toggleMenuHandler()} className = 'h-8 cursor-pointer'alt='Menu' src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' />
                <img className = 'h-10 w-35 mt-0 cursor-pointer' alt='youtube' src = 'https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-970-80.jpg.webp' />
            </div>
            <div className='col-span-10'>
                <input className=' border border-solid border-black rounded-l-full w-3/4 p-2' type = 'text' />
                <button className='border border-black rounded-r-full p-2'>Search</button>
            </div>
            <div className='mr-0 col-span-1'>
                <img className = 'h-8 mr-0' alt='user' src = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
            </div>
        </div>
     );
}
 
export default Header;