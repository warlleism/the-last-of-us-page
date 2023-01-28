import React, { useEffect } from "react";
import './style.scss'

const Header = () => {

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('main').style.filter = "blur(0px)"
        }, 700)
    }, [])

    return (
        <div className="header-main" id="main">

            <div className="conteiner-logo-login">
                <img className="sony-icon" src={require('../../images/sony-icons.png')} alt="" />
                <a href="">begin session</a>
            </div>

            <img className="logo-produtora" src={require('../../images/naughty-dog-logo.png')} alt="" />


            <div className="container-info-content">
                <div>The Last Of Us Part I</div>
                <div>NOW ON <strong>PC</strong></div>
                <div><strong>Sony Interactive Entertainment</strong></div>
                <a href="">PRE-SALE</a>
            </div>
        </div>
    )
}

export default Header;