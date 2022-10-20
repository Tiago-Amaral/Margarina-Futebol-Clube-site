//component pagina principal do site
import Logo from "../img/logo.png"

import Imagem from './Imagem'
import React from 'react'
import './home.css';

function home() {
    
    return (

        // div que faz a parte de mostrar o player de reprodução dos jogos 
        <div>
            <h3 className="jogos">Próximos Jogos</h3>
            <Imagem />

            <div className="video">
                <iframe width="600" height="450" src="https://www.youtube.com/embed/ve4CuBN7Ew4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    )
}

export default home;
