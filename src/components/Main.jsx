import Img1 from '../images/7922055.jpg'
import Img2 from '../images/OJ91BD0.jpg'
import { Link } from 'react-router-dom'
import Img3 from '../images/Learn-CSS-Feature-730x485.png'
import Img4 from '../images/resim_2022-12-11_174606670.png'
import Img5 from '../images/blackmirror.jpg'
import Img6 from '../images/1584354509-yapay-zeka-ve-insanin-uyumu-artirilmis-zeka-jpg.jpg'
import { BsCalendarDate } from 'react-icons/bs';
import { useContext } from 'react'





export function Main1() {




    return (
        <div>
            <div className="card border border-dark rounded ml-4 mx-auto" style={{ width: "18rem" }}>
                <img src={Img1} className="card-img-top img-fluid img-thumbnail" alt="..." />
                <div className="card-body text-center">

                    <p className="card-text no-indent">İnternetin dünya çapında erişimini mümkün kıldığı sayısız işletmenin varlığından ilham alıyorum ve bu işletmelerin başarısı için teknolojik çözümler üretmek benim tutkum.</p>
                    <Link to="/hakkimda" className="btn">Hakkımda</Link>
                </div>
            </div>
        </div>
    )
}




export function Main2(className) {


    const newClassName=`${className.className} text-white`



    return (
        <div>
            <div className={`card rounded  border-dark ml-4 mx-auto ${newClassName}`} style={{ width: '18rem', marginBottom: '4px'}}>
                <img style={{ borderRadius: '9px' }} src={Img2} className="card-img-top img-fluid img-thumbnail" alt="..." />
                <div className="card-body text-center">

                    <p className="card-text no-indent">HTML, Hypertext Markup Language, web sitelerinin yapısını belirlemek için kullanılan bir etiket dilidir. Bu makalede, HTML etiketlerinin ne olduğu, nasıl kullanıldığı ve neden önemli olduğu hakkında bilgi edineceksiniz.</p>
                    <Link to={'/html-yazi'} className="btn">Yazıyı gör</Link>
                </div>
            </div>
        </div>
    )
}




export function Main3(className) {

    const newClassName=`${className.className} text-white`

    return (
        <div className={`card rounded border-dark ml-4 mx-auto ${newClassName}`} style={{ width: '18rem', marginBottom: '4px' }}>
            <img style={{ borderRadius: '9px' }} src={Img3} className="card-img-top img-fluid img-thumbnail" alt="..." />
            <div className="card-body text-center">

                <p className="card-text no-indent">CSS (Cascading Style Sheets), web sitelerinin görsel tasarımının düzenlenmesine olanak sağlayan bir web teknolojisidir. HTML kodlarının görsel özelliklerini belirlemek için kullanılır.</p>
                <Link to={'/css-yazi'} className="btn">Yazıyı gör</Link>
            </div>
        </div>
    )
}



export function Main4(className) {

    const newClassName=`${className.className} text-white`

    return (
        <div className={`card rounded border-dark ml-4 mx-auto ${newClassName}`} style={{ width: '18rem', marginBottom: '4px' }}>
            <img style={{ borderRadius: '9px' }} src={Img4} className="card-img-top img-fluid img-thumbnail" alt="..." />
            <div className="card-body text-center">

                <p className="card-text no-indent">JavaScript, günümüzün en popüler programlama dillerinden biridir ve özellikle web geliştirme alanında yaygın olarak kullanılmaktadır. Bu dil, web sayfalarının etkileşimli ve dinamik olmasını sağlayan birçok özelliğe sahiptir. Bu makalede JavaScript hakkında detaylı bilgi edinebilirsiniz.</p>
                <Link to={'/javascript-yazi'} className="btn">Yazıyı gör</Link>
            </div>
        </div>
    )
}

export function Yapayzeka(className) {

    const newClassName=`${className.className} text-white`

    return (
        <div className={`card rounded border-dark ml-4 mx-auto ${newClassName}`} style={{ width: '18rem', marginBottom: '4px' }}>
            <img style={{ borderRadius: '9px' }} src={Img6} className="card-img-top img-fluid img-thumbnail" alt="..." />
            <div className="card-body text-center">

                <p className="card-text no-indent">Yapay zeka (YZ) son yıllarda hızla gelişen bir teknoloji olup, hayatımızın birçok alanında yer almaktadır. Özellikle son yıllarda büyük veri analitiği, makine öğrenmesi ve derin öğrenme algoritmalarındaki gelişmelerle birlikte, YZ alanında da büyük bir ivme kazanılmıştır. Bu yazıda, YZ'nin geleceği hakkında tahminlerde bulunacağız.</p>
                <Link to={'/yapayzeka'} className="btn">Yazıyı gör</Link>
            </div>
        </div>
    )
}




export function Blackmirror(className) {

    const newClassName=`${className.className} text-white`


    return (
        <div className={`card rounded border-dark ml-4 mx-auto ${newClassName}`} style={{ width: '18rem', marginBottom: '4px' }}>
            <img style={{ borderRadius: '9px' }} src={Img5} className="card-img-top img-fluid img-thumbnail" alt="..." />
            <div className="card-body text-center">
                <p className="card-text no-indent">Black Mirror, yaratıcısı Charlie Brooker tarafından hayatın her alanına teknolojinin müdahalesini konu alan bir antoloji dizisidir. İlk kez 2011 yılında İngiltere'de yayınlanan dizi, sonraki yıllarda Netflix tarafından da satın alındı ve dünya çapında geniş bir hayran kitlesi kazandı. <br /><small className='text-center' style={{ fontSize: '10px' }}>30 Nisan 2023 <BsCalendarDate style={{ fontSize: '15px', marginBottom: '3px', marginLeft: '3px' }} /></small></p>
                <Link to={'/blackmirror-yazi'} className="btn">Yazıyı gör</Link>
            </div>
        </div>
    )
}






