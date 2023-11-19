import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Outlet, useNavigate, createSearchParams, useParams, useSearchParams } from "react-router-dom"

import { Home } from './pages/Home'
import { About } from './pages/About'
import { MainPage } from './pages/MAIN'


export function App() {

    return (
        <Router>

            <main className='main-app'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/board" element={<BoardIndex />} />
                    <Route path="/board/:boardId" element={<BoardDetails />}>
                        {/* <Route path="/board/:boardId/:taskId" element={<TaskDetails />} /> */}
                    </ Route>
                    <Route path="/board/:boardId/:taskId" element={<TaskDetails />} />
                </Routes>
            </main>

        </Router>

    )
}


