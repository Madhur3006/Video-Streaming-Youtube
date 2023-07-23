import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainor from './commentContainor';

const WatchPage = () => {

    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return ( 
        <div className='m-2 p-2'>
            <iframe 
                width="800" 
                height="400" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <CommentsContainor />
        </div>
     );
}
 
export default WatchPage;