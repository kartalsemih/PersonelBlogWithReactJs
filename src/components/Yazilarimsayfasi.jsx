
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Img1 from '../images/pexels-janson-a-753695.jpg'
import Img2 from '../images/pexels-leah-kelley-952594.jpg'
import { useState, useEffect } from 'react'


function Yazilarimsayfasi() {

    const [imgSrc,setImgSrc]=useState(Img1);

    // useEffect(()=> {
        
    //     const interval = setInterval(() => {
    //         setImgSrc(prevImgSrc => prevImgSrc === Img1 ? Img2 : Img1);
    //     },5000);

    //     window.scrollTo(0, 0);

    //     return () => clearInterval(interval);
    // },[]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="App">
            <Navbar />
            <div className="row m-0">
                <div className="yazi-listesi col-lg-3 col-sm-12">
                    <h4 className='text-center pt-3'>Yazılar</h4>
                    <ol className='ml-5 pt-3'>
                        <li>
                            <Link to={'/html-yazi'} className='liste-renk'>HTML nedir?</Link>
                        </li>
                        <li>
                            <Link to={'/css-yazi'} className='liste-renk'>CSS nedir?</Link>
                        </li>
                        <li>
                            <Link to={'/javascript-yazi'} className='liste-renk'>JavaScript Nedir?</Link>
                        </li>
                        <li>
                            <Link to={'/yapayzeka'} className='liste-renk'>Yapay Zeka</Link>
                        </li>
                        <li>
                            <Link to={'/blackmirror-yazi'} className='liste-renk'>Black Mirror İnceleme</Link>
                        </li>
                    </ol>

                </div>
                <div className="col-lg-9 col-sm-12 p-0">
                    <img className='img-fluid' src={imgSrc} alt=""/>
                    <img className='img-fluid d-lg-none' src={Img2}  alt=""/>
                </div>
            </div>
            <Footer />
        </div>
    )
}






export default Yazilarimsayfasi