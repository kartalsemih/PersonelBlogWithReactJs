import Img1 from '../images/pexels-nothing-ahead-3196043.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import React, { useEffect } from 'react';


function Hakkimda() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="App">
            <Navbar />
            <div className="container-sm mt-3">
                <div className="row">
                    <div className="col-md-4 mb-1 border border-dark rounded ml-2 mr-2">
                        <div className="bg-color">
                            <h1 className="text-light text-center">Hakkımda</h1>
                        </div>
                        <p style={{ marginTop: '85px' }} className="text-center no-indent">Merhaba, ben Semih Kartal ve Balıkesir'de yaşıyorum. <br /><br />
                            Benim odak noktam, kullanıcı dostu, hızlı ve güvenilir web siteleri ve uygulamaları geliştirmektir. <br /><br />Bu nedenle, web geliştirme alanındaki en son trendleri ve teknolojileri yakından takip ediyorum ve her proje için en iyi çözümleri sağlamak için bunları kullanıyorum.
                            <br /><br /> İşinizin gereksinimlerini anlamak için zaman ayırırım ve proje boyunca sıkı bir iletişim kurarak, en iyi sonuçları elde etmek için birlikte çalışırız.<br /> <br />İşletmenizin büyümesine yardımcı olmak için benimle iletişime geçmekten çekinmeyin!</p>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <img src={Img1} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}




export default Hakkimda