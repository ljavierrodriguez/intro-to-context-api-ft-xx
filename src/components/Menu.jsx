import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ColorContext } from '../context/ColorContext'
import { AppContext } from '../context/AppContext'

const Menu = () => {
    //const { store: { color }, actions: { setColor }} = useContext(ColorContext)
    const { store: { color }, actions: { setColor }} = useContext(AppContext);
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className='nav-item'>
                <input type="color" name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} className='my-2' />
            </li>
        </ul>
    )
}

export default Menu