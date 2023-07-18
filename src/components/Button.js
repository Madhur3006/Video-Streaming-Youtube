import React from 'react';

const Button = ({name}) => {
    return ( 
        <div>
            <button className='border rounded m-1 p-1 bg-gray-100 cursor-pointer'>{name}</button>
        </div>
     );
}
 
export default Button;