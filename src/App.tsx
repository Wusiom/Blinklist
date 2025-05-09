import type { FC } from "react";

import { useState } from 'react'
import Layout from './components/Layout'
function App() {
    const [count, setCount] = useState(0)
    return (
        <Layout />
    )
    // return (
    //     <div className="border-lightest-grey border-b sticky top-0 z-40 bg-white">
    //         <header className="flex w-full shrink-0 items-center justify-between m:px-12 mx-auto max-w-7xl px-4">
    //             <div className="flex items-center justify-center h-18 gap-4 ltr:ml-3 rtl:mr-3">
    //                 <img alt="Ryot" src={titleLogo} className="mr-2 m:h-6 h-5" />
    //                 <span className="text-xl hidden md:block">
    //                     <button className='cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-sm text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 hover:text-blue-2 px-0 py-0 group'>
    //                         Categories
    //                     </button>
    //                 </span>
    //             </div>
    //             <nav className="ml-auto flex gap-4 sm:gap-6">
    //                 <button
    //                     className="text-sm font-medium   underline-offset-4"
    //                 >
    //                     For Business
    //                 </button>
    //                 <button
    //                     className="text-sm font-medium underline-offset-4 bg-green hover:bg-green-2"
    //                 >
    //                     Login
    //                 </button>
    //                 <a
    //                     className="text-sm font-medium underline-offset-4"
    //                 >
    //                     Your account
    //                 </a>
    //                 <a
    //                     target="_blank"
    //                     href="https://docs.ryot.io"
    //                     rel="noopener noreferrer"
    //                     className="text-sm font-medium underline-offset-4 hidden md:block"
    //                 >
    //                     Documentation
    //                 </a>
    //                 <button
    //                     className="text-sm font-medium underline-offset-4 hidden md:block"
    //                 >
    //                     Contact Us
    //                 </button>
    //                 <button
    //                     className="text-sm font-medium underline-offset-4 hidden md:block"
    //                 >
    //                     Terms
    //                 </button>
    //             </nav>
    //         </header>
    //     </div>
    // )
}

export default App
