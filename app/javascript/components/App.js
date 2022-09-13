import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home.js";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
      </BrowserRouter>
    );
}

export default App;