
import { Link } from 'react-router-dom'
import Img1 from '../images/programming-code-signs.png'


import React, { useEffect } from 'react';




function Logosuzfooter() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <footer>
            <div className="site-header py-3 ">
                <nav className="container-sm site-header sticky-top py-1 ">
                    <div className="row">
                        <div className="col-sm-12 text-center ">
                            <Link to={'/'} className='footer-margin' onClick={() => window.scrollTo(0, 0)}>
                                <img src={Img1} alt="" />
                            </Link>
                            <small style={{ color: '#bfbfbf', fontSize: '10px' }}>© 2023 Tüm Hakları Saklıdır.</small>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    )
}



export default Logosuzfooter