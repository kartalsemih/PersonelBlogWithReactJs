

import Footer from './Footer'
import React, { useEffect } from 'react';
import Img1 from '../images/62486350_thai1jpg.jpg'
import Img2 from '../images/Adsız.jpg'
import Img3 from '../images/pexels-hatice-baran-16037283.jpg'
import Navbar from './Butonsuz_navbar'
import { MdOutlineLightMode,MdOutlineNightlight } from 'react-icons/md';

import { useContext ,useState} from 'react'

function Yapayzeka() {



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


            <div className="container ">
                <div className="row">
                <div style={{ borderRadius: "4px", textAlign: "left" }} className={`col-11 mx-auto border border-dark border-radius my-1 ${className}`}>

                        <div className='d-flex justify-content-end'>
                            <button className="btn btn-secondary btn-sm my-3" onClick={toggleDarkMode}>
                            {darkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
                            </button>
                        </div>


                        <h1 className="text-center mt-3">
                            <strong>Yapay Zeka</strong>
                        </h1>
                        <p className="text-left first-letter indent">
                            Yapay zeka (YZ) son yıllarda hızla gelişen bir teknoloji olup, hayatımızın birçok alanında yer almaktadır. Özellikle son yıllarda büyük veri analitiği, makine öğrenmesi ve derin öğrenme algoritmalarındaki gelişmelerle birlikte, YZ alanında da büyük bir ivme kazanılmıştır. Bu yazıda, YZ'nin geleceği hakkında tahminlerde bulunacağız.
                        </p>
                        <p className="text-left">
                            Gelecekte YZ'nin sağlık alanında kullanımı oldukça yaygın hale gelecektir. YZ sayesinde teşhis süreçleri daha hızlı ve doğru bir şekilde yapılabilir. Ayrıca, ilaç geliştirme sürecinde YZ kullanımı da artacak ve daha etkili ilaçlar geliştirilebilecektir.
                        </p>
                        <div className="container mt-5 mb-5">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <img className='img-fluid' src={Img1} style={{borderRadius:'5%'}} alt="" />
                                </div>
                                <div className="col-lg-6 col-sm-12 my-auto ">
                                    <p className="text-left">
                                        Otonom araç teknolojilerinde YZ'nin kullanımı da artacak. YZ'ye sahip araçlar sayesinde trafik kazaları ve trafik sıkışıklığı azaltılabilir. Ayrıca, taşımacılık sektöründe de YZ kullanımı artacak ve lojistik süreçler daha verimli hale gelecektir.
                                    </p>
                                    <p className="text-left">
                                        Eğitim sektöründe de YZ kullanımı artacak. Öğrencilerin öğrenme sürecinde YZ'nin yardımıyla daha interaktif ve kişiselleştirilmiş bir eğitim deneyimi yaşayabilirler. Ayrıca, öğretmenler de YZ kullanarak öğrencilerin öğrenme süreçlerini daha iyi anlayabilir ve öğrenmelerini daha etkili hale getirebilirler.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <p className="text-left">
                            Güvenlik sektöründe de YZ'nin kullanımı artacak. YZ kullanarak, suç oranları azaltılabilir ve terör saldırıları önlenebilir. Ayrıca, siber güvenlik alanında da YZ kullanımı artarak, siber saldırılar daha hızlı bir şekilde tespit edilebilir.
                        </p>

                        <div className="container mt-5 mb-5">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <img className='img-fluid' src={Img2}  alt="" />
                                </div>
                                <div className="col-lg-6  d-flex align-items-center col-sm-12">
                                    <p className="text-left ">
                                        YZ'nin geleceği oldukça parlak görünüyor. YZ'nin kullanımı hayatımızın birçok alanında artacak ve bu alanlarda büyük değişiklikler yaşanacaktır. Ancak, YZ'nin kullanımı ile birlikte bazı endişeler de ortaya çıkacaktır. Özellikle, insanların işlerini kaybetme endişesi gibi. Bu nedenle, YZ'nin kullanımının doğru bir şekilde yönetilmesi ve insanlar için fayda sağlaması gerekmektedir.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-left">
                            ChatGPT gibi dil modelleri de YZ'nin bir türüdür. ChatGPT, OpenAI tarafından geliştirilen bir doğal dil işleme modelidir ve GPT-3.5 mimarisine sahiptir. ChatGPT, birçok farklı uygulamada kullanılabilmektedir. Örneğin, müşteri hizmetleri, dil öğrenimi, metin oluşturma ve anketler gibi birçok alanda kullanılabilir.
                        </p>
                        <p className="text-left">
                            ChatGPT, doğal dil işleme teknolojisinin en son gelişmelerini kullanarak, gerçekçi ve akıcı metinler üretebilir. ChatGPT, öğrenme sürecinde büyük bir veri kümesini kullanır ve bu veriler sayesinde, insan benzeri cevaplar üretme yeteneğine sahiptir. Ayrıca, ChatGPT, öğrenme sürecinde sürekli olarak kendini geliştirir ve daha iyi sonuçlar üretir.
                        </p>
                        <img className='img-fluid mt-5 mb-5' src={Img3}  alt="" />
                        <p className="text-left">
                            ChatGPT'nin kullanımı birçok farklı endüstride hızla artmaktadır. Özellikle, müşteri hizmetleri ve pazarlama gibi alanlarda, ChatGPT'nin kullanımı giderek artmaktadır. ChatGPT, müşteri hizmetlerindeki sıradan sorulara cevap vermek, dil öğreniminde öğrencilere yardımcı olmak ve metin oluşturmada yaratıcılığı artırmak için kullanılabilir.
                        </p>
                        <p className="text-left">
                            ChatGPT gibi doğal dil işleme modelleri, insanlarla makine arasındaki iletişimi kolaylaştırmak ve birçok farklı uygulamada kullanılabilir. Ancak, ChatGPT gibi modellerin de doğru bir şekilde kullanılması gerekmektedir. Özellikle, güvenilirlik ve etik sorunlarına dikkat edilmelidir.
                        </p>
                    </div>
                </div>
            </div>













            <Footer />
        </div>
    )
}

export default Yapayzeka