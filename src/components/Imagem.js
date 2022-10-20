
//principal do carrosel de umagens dos próxinmos jogos

import '../components/Imagem.css'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef} from 'react'
import React from 'react'
import im1 from '../img/im1.jpg'
import im2 from '../img/im2.jpg'
import im3 from '../img/im3.jpg'

const imagens = [im1, im2, im3]

function Imagem() {
    const carousel = useRef();
const [width, setWidth] = useState (0)
    useEffect(() =>{
setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])


    return (

        //Logica do carrossel
        <div className="imagem">

            <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                <motion.div className="inner"
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                initial={{ x:300}}
                animate={{ x:0}}
                transition={{ duration:10}}>
                    {imagens.map(image => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="texto" />
                        </motion.div>

                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Imagem;




