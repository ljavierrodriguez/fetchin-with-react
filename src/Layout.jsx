import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterDetail from './pages/CharacterDetail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='character/:id' element={<CharacterDetail />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout