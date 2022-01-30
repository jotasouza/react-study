import React from "react"

import {AreaHeader} from './styled'


function Header(){

    return(
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    LOGO MARCA
                </div>

                <nav className="navbar">
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Configurações</a></li>
                        <li><a href="#">Sair</a></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}

export default Header