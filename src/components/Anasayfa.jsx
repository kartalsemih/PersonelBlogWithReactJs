import Navbar from './Navbar'
import Footer from './Footer'
import { Main1, Main2, Main3, Main4, Blackmirror, Yapayzeka } from './Main'

import { useState, useEffect } from 'react'




function Anasayfa() {

    const [darkMode, setDarkMode] = useState(false);
    const className = darkMode ? 'bg-dark  border-white' : 'text-dark';

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
        localStorage.setItem('isDarkMode', !darkMode);
    }


    useEffect(() => {
        const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);




    return (
        <div className={`App ${className}`} >

            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>


            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Blackmirror className={className}/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Yapayzeka className={className}/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Main4 className={className}/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Main3 className={className}/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Main2 className={className}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>



    )
}


export default Anasayfa