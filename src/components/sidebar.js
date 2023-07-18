import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

        //early return 
    if(!isMenuOpen) return null

    return ( 
        <div className='shadow ml-3'>
            <ul>
                <li>Home</li>
                <li>Videos</li>
                <li>Live</li>
                <li>Shorts</li>
            </ul>
            <h1 className='font-bold mt-5'>Subscriptions</h1>
            <ul>
                <li>Home</li>
                <li>Videos</li>
                <li>Live</li>
                <li>Shorts</li>
            </ul>
            <h1 className='font-bold mt-5'>WatchLater</h1>
            <ul>
                <li>Home</li>
                <li>Videos</li>
                <li>Live</li>
                <li>Shorts</li>
            </ul>
        </div>
     );
}
 
export default Sidebar;