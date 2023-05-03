

import Logo from '../images/programming-code-signs.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';






function Butonsuz_navbar() {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <nav className="site-header sticky-top">
            <div className="container d-flex flex-column flex-lg-row justify-content-start">
                <Link to={'/'} onClick={() => window.scrollTo(0, 0)} className="py-3 mr-md-5 logo-md">
                    <img src={Logo} alt="" />
                </Link>

                <div className="d-flex flex-row mobile-navbar">
                    <Link to={'/yazilarim'} onClick={() => window.scrollTo(0, 0)} className="py-3 mr-md-5 mr-3 _2">Yazılarım</Link>
                    <Link to={'/sosyalmedya'} onClick={() => window.scrollTo(0, 0)} className="py-3 _3">Sosyal Medya</Link>


                </div>

            </div>

        </nav>




    )
}





export default Butonsuz_navbar




