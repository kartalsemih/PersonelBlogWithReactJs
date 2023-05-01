import Navbar from './Navbar'
import Footer from './Footer'
import { Main1, Main2, Main3, Main4 , Blackmirror , Yapayzeka} from './Main'




function Anasayfa() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Blackmirror />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Yapayzeka />
                    </div>  
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Main4 />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Main3 />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mt-3">
                        <Main2 />
                    </div>
                </div>
            </div>
            <Footer />
        </div>



    )
}


export default Anasayfa