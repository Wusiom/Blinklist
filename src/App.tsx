import type { FC } from "react";
import Layout from './components/Layout'
import { Routes, Route } from "react-router";
import Home from "./views/home"
import Detail from "./views/detail"
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/detail" element={<Detail/>}></Route>
            </Routes>
        </Layout>
    )
}

export default App
