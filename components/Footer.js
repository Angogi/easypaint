import React from 'react';
import styles from "../styles/Footer.module.css";
import {FaFacebookSquare, FaInstagramSquare, FaMailBulk, FaPhoneAlt } from 'react-icons/fa'
import {GiPositionMarker} from 'react-icons/gi'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container} >
                <div className={`${styles.sec} ${styles.abouts}`}>
                    <h2>Acerca de nosotros</h2>
                    <p>
                        Easy Paint es un emprendimiento pyme impulsado por Edwar Gómez, 
                        un joven emprendedor que colabora con sus clientes
                        arduamente para que el proceso de remodelación de pintura de vuestros
                        hogares y negocios sea rapido, limpio, a un precio competitivo, y sobre todo,
                        de entera satisfacción.
                    </p>
                    <ul className={styles.sci}>
                        <li><a href="#"><FaFacebookSquare className={styles.icon}/></a></li>
                        <li><a href="#"><FaInstagramSquare className={styles.icon}/></a></li>
                        <li><a href="#"><FaMailBulk className={styles.icon}/></a></li>
                    </ul>
                </div>
                <div className={`${styles.sec} ${styles.contact}`}>
                    <h2>Contacto</h2>
                    <ul className={styles.info}>
                        <li>
                            <span><GiPositionMarker/></span>
                            <span>Barcelona, España</span>
                        </li>
                        <li>
                            <span><FaPhoneAlt/></span>
                            <p><a href="tel:691847043">691847043</a></p>
                        </li>
                        <li>
                            <span><FaMailBulk/></span>
                            <p><a href="mailto:easypaintingspain@gmail.com">easypaintingspain@gmail.com</a></p>
                        </li>
                    </ul>
                </div>                
            </div>
            <div className={styles.copyRightText}>
                <p>Todos los derechos reservados © <br/>Easy Paint 2020</p>
            </div>
        </div>
    );
};

export default Footer;
