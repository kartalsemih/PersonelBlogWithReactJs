
import { Link } from 'react-router-dom'
import Img1 from '../images/programming-code-signs.png'
import Img2 from '../images/gmail.png'
import Img3 from '../images/github (1).png'
import Img4 from '../images/linkedin.png'
import Img5 from '../images/twitter.png'
import Img6 from '../images/instagram.png'
import React, { useEffect } from 'react';

function Footer() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <footer>
            <div className="site-header py-3 ">
                <nav className="container-sm site-header sticky-top py-1 ">
                    <div className="row">
                        <div className="col-sm-12 text-center ">
                            <Link to={'https://www.instagram.com/krtl.smh/'} className='footer-margin' target='_blank' rel="noopener noreferrer">
                                <img src={Img6} alt="" />
                            </Link>
                            <Link to={'https://twitter.com/sanjunip3r0'} className='footer-margin' target="_blank" rel="noopener noreferrer">
                                <img src={Img5} alt="" />
                            </Link>
                            <Link to={'https://www.linkedin.com/in/semih-kartal-853871264/'} className='footer-margin' target="_blank" rel="noopener noreferrer">
                                <img src={Img4} alt="" />
                            </Link>
                            <Link to={'https://github.com/kartalsemih'} className='footer-margin' target="_blank" rel="noopener noreferrer">
                                <img src={Img3} alt="" />
                            </Link>
                            <a className='footer-margin' href="mailto:kartalsemih@windowslive.com">
                                <img src={Img2} alt="" />
                            </a>
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



export default Footer