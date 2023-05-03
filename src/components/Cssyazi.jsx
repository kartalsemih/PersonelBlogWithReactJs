

import Footer from './Footer'
import Img1 from '../images/css.jpg'
import React, { useEffect } from 'react';

import {  useState } from 'react'
import Navbar from './Butonsuz_navbar'
import { MdOutlineLightMode,MdOutlineNightlight } from 'react-icons/md';

function Cssyazi() {

    const [darkMode, setDarkMode] = useState(false);
    const className = darkMode ? 'bg-dark text-white border-white' : '';

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
        localStorage.setItem('isDarkMode', !darkMode);
    }


    useEffect(() => {
        const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className={`${className}`}>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div style={{ borderRadius: "4px", textAlign: "left" }} className={`col-11 mx-auto border border-dark border-radius my-1 ${className}`}>

                        <div className='d-flex justify-content-end'>
                            <button className="btn btn-secondary btn-sm my-3" onClick={toggleDarkMode}>
                            {darkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
                            </button>
                        </div>



                        <h1 className="text-center mt-3">
                            <strong>CSS nedir?</strong>
                        </h1>
                        <p className="text-left first-letter indent">
                            CSS (Cascading Style Sheets), web sitelerinin görsel tasarımının düzenlenmesine olanak sağlayan bir web teknolojisidir. HTML kodlarının görsel özelliklerini belirlemek için kullanılır.
                        </p>
                        <p className="text-left">
                            CSS, HTML ile birlikte kullanıldığında, web sitelerinin düzenli, estetik ve okunaklı bir şekilde görüntülenmesini sağlar. CSS sayesinde, web sayfaları arka plan rengi, yazı tipi, yazı boyutu, kenar boşluğu, hizalama ve daha birçok görsel özelliğini belirlemek mümkündür.
                        </p>
                        <p className="text-left">
                            CSS, özellikle web tasarımı alanında çalışanlar için önemlidir. İyi bir tasarım, web sitesinin ziyaretçileri tarafından kolayca anlaşılmasını ve akılda kalmasını sağlar. Bu nedenle, web sitelerinin tasarımı ve görsel özelliklerinin CSS ile düzenlenmesi, kullanıcı deneyimini artırmak açısından oldukça önemlidir.
                        </p>
                        <p className="text-left">
                            CSS kullanımı oldukça kolaydır. CSS kodları, HTML kodlarının içinde veya ayrı bir dosyada yazılabilir. CSS özellikleri seçiciler ve bildirimlerle tanımlanır. Seçiciler, belirli bir HTML öğesini (etiket, sınıf veya kimlik) seçmek için kullanılırken, bildirimler seçilen öğenin görsel özelliklerini belirlemek için kullanılır.
                        </p>
                        <h2 className="text-center">
                            <strong>Neden CSS?</strong>
                        </h2>
                        <p className="text-left">
                            CSS'nin önemli bazı noktaları şunlardır:
                        </p>
                        <ul className='ml-3 no-indent'>
                            <li>CSS, web sayfalarının görsel tasarımını düzenlemek için kullanılır.</li>
                            <li>CSS kodları, HTML kodlarına dahil edilebilir veya ayrı bir dosyada yazılabilir.</li>
                            <li>CSS seçiciler ve bildirimler aracılığıyla kullanılır.</li>
                            <li>CSS ile web siteleri daha düzenli, estetik ve okunaklı hale getirilebilir.</li>
                            <li>İyi bir CSS tasarımı, kullanıcı deneyimini artırabilir ve web sitesinin akılda kalmasını sağlayabilir.</li>
                        </ul>
                        <p className="text-left">
                            Sonuç olarak, CSS, web sitelerinin görsel tasarımının düzenlenmesi açısından oldukça önemlidir. CSS kullanarak, web siteleri daha düzenli, estetik ve kullanıcı dostu hale getirilebilir.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className={`col-11 mx-auto  offset-md-2 border border-dark rounded my-1 ${className}`}>
                        <h2 className="text-center">
                            <strong>Sık kullanılan CSS stilleri</strong>
                        </h2>
                        <p>CSS, web sitelerinin görsel tasarımını düzenlemek için birçok farklı özelliğe sahiptir. En çok kullanılan CSS özellikleri şunlardır:</p>
                        <div className="d-flex justify-content-center">
                            <div className="p-1">
                                <a href={Img1} target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid" src={Img1} style={{ width: "562px", height: "300px" }} alt="" />
                                </a>
                            </div>
                        </div>

                        <p className="text-left">
                            Bu özellikler, web tasarımında sıklıkla kullanılan ve web sayfalarının görsel tasarımını düzenlemede önemli bir rol oynayan temel CSS özellikleridir. Ancak CSS'de daha birçok özellik bulunmaktadır ve kullanılan özellikler, tasarımın ihtiyacına ve hedef kitleye göre değişebilir.
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}


export default Cssyazi