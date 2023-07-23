import React from 'react';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info
    const {title, channelTitle, thumbnails} = snippet
    return ( 
        <div className='p-2 m-2 w-[20rem] shadow-lg hover:bg-gray-100'>
            <img className = 'rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
            <ul>
                <li className='font-bold my-1'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
     );
}
 
export default VideoCard;