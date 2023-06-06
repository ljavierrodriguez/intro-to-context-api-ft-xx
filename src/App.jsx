import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import About from './pages/About'
import AppColorContext, { ColorContext } from './context/ColorContext'
import injectContext from './context/AppContext'

const App = () => {
    //const { store: { color }, actions: { setColor }} = useContext(ColorContext)
    return (
        <AppColorContext>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </AppColorContext>
    )
}

export default injectContext(App)