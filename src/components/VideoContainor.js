import React, { useState, useEffect } from 'react';
import { API_URL } from '../utils/CONSTANTS';
import VideoCard from './videoCard';
import { Link } from 'react-router-dom';

const VideoContainor = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(API_URL)
        const json = await data.json()
        console.log(json.items)
        setVideos(json.items) 
    }
    return (<div className='flex flex-wrap'>
        {videos.map((video) => <Link to = {"/watch?v="+ video.id}><VideoCard key = {video.id} info = {video} /></Link>)}
    </div>);
}
 
export default VideoContainor;