
import Navbar from './Navbar'
import Footer from './Footer'
import Img1 from '../images/js1.jpg'
import Img2 from '../images/js2.jpg'
import Img3 from '../images/js3.jpg'
import Img4 from '../images/js4.jpg'
import React, { useEffect } from 'react';

function Javascriptyazi() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div style={{ borderRadius: "4px", textAlign: "left" }} className="col-11 mx-auto border border-dark border-radius my-1">
                        <h1 className="text-center mt-3">
                            <strong>JavaScript Nedir?</strong>
                        </h1>
                        <p className="text-left first-letter indent">
                            JavaScript, günümüzün en popüler programlama dillerinden biridir ve özellikle web geliştirme alanında yaygın olarak kullanılmaktadır. Bu dil, web sayfalarının etkileşimli ve dinamik olmasını sağlayan birçok özelliğe sahiptir. Bu makalede JavaScript hakkında detaylı bilgi edinebilirsiniz.
                            JavaScript, web tarayıcılarında çalışan bir programlama dilidir. Bu dil, bir web sayfasının etkileşimli hale getirilmesine, kullanıcı ile etkileşim kurulmasına, animasyonların oluşturulmasına ve veri işleme işlemlerinin gerçekleştirilmesine olanak sağlar.
                        </p>
                        <h1 className="text-center">
                            <strong>JavaScript'in Tarihçesi</strong>
                        </h1>
                        <p className="text-left">
                            JavaScript, 1995 yılında Netscape Communications Corporation tarafından geliştirildi. Orijinal adı Mocha ve daha sonra Livescript olarak değiştirildi. Daha sonra Java'nın popülerliğine atıfta bulunarak JavaScript adını aldı. JavaScript, web sayfalarına etkileşimli özellikler eklemek için kullanılırken, sunucu tarafı programlama dilleri de geliştirilmekteydi. Node.js gibi teknolojiler sayesinde JavaScript, sunucu tarafında da kullanılabiliyor.
                        </p>
                        <h1 className="text-center">
                            <strong>JavaScript Nasıl Çalışır?</strong>
                        </h1>
                        <p className="text-left">
                            JavaScript, web sayfalarında HTML ve CSS ile birlikte kullanılır. HTML, bir web sayfasının içeriğini tanımlamak için kullanılırken, CSS, web sayfasının görünümünü tanımlar. JavaScript ise, web sayfasının davranışlarını belirler. JavaScript kodu, web sayfasına yerleştirilen &lt;script&gt; etiketleri arasına yazılır ve tarayıcı, web sayfasını yüklerken bu kodları yürütür.
                        </p>
                        <h2 className="text-center">
                            <strong>JavaScript Özellikleri</strong>
                        </h2>
                        <p className="text-left">
                            JavaScript'in birçok özelliği vardır. Bazıları şunlardır:
                        </p>
                        <ul className='ml-3'>
                            <li>Nesne Yönelimli Programlama (OOP): JavaScript, nesne yönelimli programlamayı destekleyen bir dildir. Bu, kodu modüler hale getirerek daha kolay yönetilebilir hale getirir.</li>
                            <li>Hafiflik: JavaScript, web tarayıcılarında çalışır ve hafif bir dildir. Bu nedenle, web sayfalarının yüklenme süresini artırmaz.</li>
                            <li>Tarayıcı İle İletişim: JavaScript, web tarayıcısı ile etkileşim kurabildiği için, kullanıcı ile doğrudan etkileşime geçebilir. Bu, web sayfalarının etkileşimli hale getirilmesine olanak sağlar.</li>
                            <li>Dinamik: JavaScript, web sayfalarında dinamik özelliklerin eklenmesine olanak sağlar. Bu, web sayfalarının daha çekici hale getirilmesine yardımcı olur.</li>
                            <li>Öğrenmesi Kolay: JavaScript, birçok programlama dili gibi sözdizimi açısından kolaydır. Bu nedenle, öğrenmesi ve kullanması kolaydır</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-11 mx-auto  offset-md-2 border border-dark rounded my-1">
                        <h2 className="text-center">
                            <strong>JavaScript'in temel sözdizimine birkaç örnek:</strong>
                        </h2>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-md-6 p-1">
                                <a href={Img1} target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid cursor" src={Img1} alt="" style={{ width: "400px", height: "200px" }} />
                                </a>
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <a href={Img2} target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid cursor" src={Img2} alt="" style={{ width: "400px", height: "200px" }} />
                                </a>
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <a href={Img3} target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid cursor" src={Img3} alt="" style={{ width: "400px", height: "200px" }} />
                                </a>
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <a href={Img4} target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid cursor" src={Img4} alt="" style={{ width: "400px", height: "200px" }} />
                                </a>
                            </div>
                        </div>
                        <p className="text-left">
                            Bu örnekler, JavaScript'in temel sözdizimini gösterir. Ancak, JavaScript kapsamlı bir dildir ve bunlar yalnızca bazı örneklerdir.
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Javascriptyazi