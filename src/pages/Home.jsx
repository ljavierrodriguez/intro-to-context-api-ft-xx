import React, { useContext, useState } from 'react'
import { ColorContext } from '../context/ColorContext';
import { AppContext } from '../context/AppContext';

const Home = () => {
    //const [name, setName] = useState("");
    const { store: { color, name }, actions: { setColor, setName }} = useContext(AppContext);
    return (
        <section style={{ backgroundColor: color, width: '100%', height: '100vh' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <input
                            className='form-control my-3'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Insert Name'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home