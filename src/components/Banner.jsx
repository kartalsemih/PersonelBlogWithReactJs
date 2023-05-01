
import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';


function Banner() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
    return (
        <div className="container">
            <div className="banner">
                Yapay Zekanın Geleceği
                <Link to={'/yapayzekanin-gelecegi'}><button style={{ fontSize: "16px" }} type="button" className="btn btn-primary btn-sm">Yazıyı gör</button></Link>
            </div>
        </div>
    )
}

export default Banner