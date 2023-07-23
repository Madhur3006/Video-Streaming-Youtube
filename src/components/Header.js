import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { SEARCH_SUGGESTIONS_URL } from '../utils/CONSTANTS';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)

    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }
        }, 200)

        return () => {
            clearTimeout(timer) 
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(SEARCH_SUGGESTIONS_URL+searchQuery)
        const json = await data.json()
        setSuggestions(json[1]) 
    }

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
                <div>
                    <input className=' border border-solid border-black rounded-l-full w-3/4 p-2'
                    type = 'text'
                    value = {searchQuery}
                    onChange = {(e) => setSearchQuery(e.target.value)} 
                    onFocus = {() => setShowSuggestion(true)}
                    onBlur = {() => setShowSuggestion(false)}/>
                    <button className='border border-black rounded-r-full p-2'>Search</button>
                </div>
                {showSuggestion && <div className = 'fixed bg-white py-2 px-2 w-[20rem] shadow-lg rounded-lg border border-gray'>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key = {index} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
            <div className='mr-0 col-span-1 cursor-pointer'>
                <img className = 'h-8 mr-0' alt='user' src = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
            </div>
        </div>
     );
}
 
export default Header;