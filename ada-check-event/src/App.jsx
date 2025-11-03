import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import { useState } from "react";
import './App.css';

export default function App() {
    const [query, setQuery] = useState("");
    const [trigger, setTrigger] = useState(0);

    return (
        <>
            <Navbar query={query} setQuery={setQuery} onSearch={() => setTrigger(t => t + 1)} />
            <Routes>
                <Route path='/' element={<Home query={query} trigger={trigger} />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </>
    );
}
