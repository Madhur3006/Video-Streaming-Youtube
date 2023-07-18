import React from 'react';
import Button from './Button';

const list = ['All', 'Gaming', 'Songs', 'Live', 'Soccer', 'Cricket', 'Cooking', 'Valentines', 'All', 'Gaming', 'Songs', 'Live', 'Soccer', 'Cricket', 'Cooking', 'Valentines']

const ButtonList = () => {
    return ( 
        <div className='flex'>
            {list.map((button, index) => {
                return <Button key = {index} name = {button}/>
            })}
        </div>
     );
}
 
export default ButtonList;