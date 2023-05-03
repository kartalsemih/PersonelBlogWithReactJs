
import Navbar from './Butonsuz_navbar'
import Footer from './Footer'
import Img1 from '../images/Ekran görüntüsü 2023-03-17 131751.png'
import React, { useContext, useEffect ,useState} from 'react';
import { MdOutlineLightMode,MdOutlineNightlight } from 'react-icons/md';

function Htmlyazi() {


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
        <main className={`${className}`}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className={`col-11 border border-dark my-1 mx-auto ${className}`}>


                        <div className='d-flex justify-content-end'>
                            <button className="btn btn-secondary btn-sm my-3" onClick={toggleDarkMode}>
                                {darkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
                            </button>
                        </div>


                        <h1 className="text-center mb-4 mt-3">
                            <strong>HTML nedir?</strong>
                        </h1>
                        <p className="text-center first-letter">
                            HTML, Hypertext Markup Language (Hiper Metin İşaretleme Dili) olarak da bilinen bir internet sayfası yapısı ve içeriği oluşturma dilidir. Web tarayıcıları tarafından yorumlanan ve görüntülenen web sayfalarının yapısını belirlemek için kullanılır. HTML, bir dizi etiket ve özellik kullanarak web sayfasında metin, resim, video ve diğer öğeleri biçimlendirir ve yerleştirir. HTML, web geliştiricilerinin web sayfaları oluştururken yapısını, düzenini ve içeriğini belirlemelerine yardımcı olur.
                        </p>
                        <h2 className="text-center mb-4">
                            <strong>HTML etiketleri nedir?</strong>
                        </h2>
                        <p className="text-center">
                            HTML etiketleri, web sayfalarının içeriğini belirlemek için kullanılan özel işaretlerdir. Etiketler, bir metin veya resim gibi bir web sayfasındaki belirli bir öğenin ne olduğunu tanımlarlar. Etiketler, &lt;etiket&gt; ve &lt;/etiket&gt; şeklinde iki parçadan oluşur ve öğeyi sarmaları gerekir. Örneğin, bir başlık etiketi &lt;h1&gt; ve &lt;/h1&gt; şeklinde gösterilir.
                        </p>
                        <h2 className="text-center mb-4">
                            <strong>HTML Etiketleri Nasıl Kullanılır?</strong>
                        </h2>
                        <p className="text-center">
                            HTML etiketleri, web sayfasının yapısını belirlemek için kullanılır. Örneğin, bir başlık etiketi kullanarak, bir web sayfasındaki başlığı belirleyebilirsiniz. İçerik etiketleri, metnin formatını belirlemek için kullanılır ve resim etiketleri, bir resmi web sayfasına eklemek için kullanılır. Form etiketleri, web sayfalarında form oluşturmak için kullanılır ve tablo etiketleri, tabloları oluşturmak için kullanılır.
                        </p>
                        <h2 className="text-center mb-4">
                            <strong>HTML Etiketleri Neden Önemlidir?</strong>
                        </h2>
                        <p className="text-center">
                            HTML etiketleri, web sayfalarının yapısını belirlediği için önemlidir. Bir web sayfasında doğru etiketlerin kullanılması, sayfanın daha okunaklı ve kullanıcı dostu olmasını sağlar. Ayrıca, etiketler, web sayfalarının arama motorları tarafından daha iyi anlaşılmasını sağlar. Arama motorları, web sayfasındaki içeriği anlamak için etiketleri kullanır ve doğru etiketlerin kullanılması, web sayfasının arama motorları tarafından daha iyi indekslenmesini sağlar. Sonuç olarak, HTML etiketleri web sayfalarının yapısını belirlemek için kullanılan özel işaretlerdir. Etiketler, bir metin veya resim gibi bir web sayfasındaki belirli bir öğenin ne olduğunu tanımlarlar. HTML etiketleri, web sayfalarının daha okunaklı ve kullanıcı dostu olmasını sağlar ve arama motorları tarafından daha iyi anlaşılmasını sağlar.
                        </p>
                        <p className="text-center">
                            <small>
                                Daha detaylı bilgi ve tarihçe için{" "}
                                <a className="_4" rel="noopener noreferrer" target="_blank" href="https://tr.wikipedia.org/wiki/HTML" style={{ textDecoration: "none" }}>
                                    HTML vikipedi
                                </a>{" "}
                                sayfasını ziyaret edebilirsiniz.
                            </small>
                        </p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div style={{ textAlign: "center" }} className={`col-11 mx-auto border border-dark my-1 ${className}`}>
                        <h2 className="mb-4">
                            <strong>Sık kullanılan HTML etiketleri</strong>
                        </h2>
                        <a href={Img1} target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid pb-1 cursor" src={Img1} style={{ width: "674px", height: "450px" }} alt="" />
                        </a>

                    </div>
                </div>
            </div>

            <div className="navbar">
                <div className="row">
                    <div className="col-12">
                        Kaynakça:{" "}
                        <span>
                            {" "}
                            <a target="_blank" rel="noopener noreferrer" className="_4" href="https://openai.com/blog/chatgpt">
                                Open AI
                            </a>{" "}
                            -{" "}
                            <a target="_blank" rel="noopener noreferrer" className="_4" href="https://openai.com/blog/chatgpt">
                                ChatGPT
                            </a>
                        </span>
                        <p style={{ marginLeft: "80px" }}>
                            {" "}
                            <a className="_4" rel="noopener noreferrer" target="_blank" href="https://tr.wikipedia.org/wiki/HTML">
                                Vikipedi
                            </a>{" "}
                            -{" "}
                            <a target="_blank" rel="noopener noreferrer" className="_4" href="https://tr.wikipedia.org/wiki/HTML">
                                HTML
                            </a>{" "}
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}


export default Htmlyazi