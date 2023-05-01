
import Navbar from './Navbar'
import Footer from './Logosuzfooter'
import { Link } from 'react-router-dom'
import Img2 from '../images/gmail.png'
import Img3 from '../images/github (1).png'
import Img4 from '../images/linkedin.png'
import Img5 from '../images/twitter.png'
import Img6 from '../images/instagram.png'
import Img7 from '../images/social.jpg'






function Sosyalmedyasayfasi() {
    return (
        <div className="App">
            <Navbar />
            <div style={{backgroundColor:'#cdf6e4'}} className="row m-0">
                <div className="yazi-listesi col-lg-3 col-sm-12 text-center">
                    <p className='mb-5'></p>
                    
                    <p ></p>
                    <Link to={'https://www.instagram.com/krtl.smh/'} className='footer-margin' target='_blank' rel="noopener noreferrer">
                        <img className='img-size logos mt-5' src={Img6} alt="" />
                    </Link>
                    <p ></p>
                    
                    <p ></p>
                    <Link to={'https://twitter.com/sanjunip3r0'} className='footer-margin' target="_blank" rel="noopener noreferrer">
                        <img className='img-size logos mt-5' src={Img5} alt="" />
                    </Link>
                    <p ></p>
                    
                    <p ></p>
                    <Link to={'https://www.linkedin.com/in/semih-kartal-853871264/'} className='footer-margin' target="_blank" rel="noopener noreferrer">
                        <img className='img-size logos mt-5' src={Img4} alt="" />
                    </Link>
                    <p ></p>
                    
                    <p ></p>
                    <Link to={'https://github.com/kartalsemih'} className='footer-margin' target="_blank" rel="noopener noreferrer">
                        <img className='img-size logos mt-5' src={Img3} alt="" />
                    </Link>
                    <p ></p>
                    
                    <p ></p>
                    <a className='footer-margin' href="mailto:kartalsemih@windowslive.com">
                        <img className='img-size logos mt-5 mb-5' src={Img2} alt="" />
                    </a>

                </div>
                <div className="col-lg-9  col-sm-12 p-0">
                    <img className='img-fluid' src={Img7} alt="" />
                </div>
            </div>
            <Footer />

        </div>
    )
}



export default Sosyalmedyasayfasi









