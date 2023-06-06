import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { AppContext } from '../context/AppContext';

const About = () => {
    const { store: { color, name }, actions: { setColor }} = useContext(AppContext);
    return (
        <section style={{ backgroundColor: color, width: '100%', height: '100vh' }}>
            <div>About {name}</div>
        </section>
    )
}

export default About