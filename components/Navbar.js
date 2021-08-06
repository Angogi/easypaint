import { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import DateComponent from "./DateComponent";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import { GiPaintRoller } from "react-icons/gi";


const Navbar = () =>{

    const [sidebar, setSidebar] = useState(false);
    const navbarClassname = sidebar ? `${styles["active"]} ${styles.navMenu}` : styles.navMenu;
    const showSidebar = () =>setSidebar(!sidebar)

    return(
        <div>
            <div className={styles.navbar}>
                <Link href="/" >
                    <a className={styles.menuBars}><FaCalendarCheck onClick={showSidebar} /></a>
                </Link> 
                <span className={styles.logoName}>Easy Paint</span>
                <GiPaintRoller className={styles.logoName}/>
            </div>
            
            <nav className={navbarClassname}>
                <a className={styles.menuBars}><FaCalendarTimes onClick={showSidebar} /></a>
                <DateComponent />
                <div className={styles.temporalyWarnigMessage} >
                    <h3>Servicio deshabilitado <span role="image">😅</span></h3>
                    <p>Puede dejarnos un mensaje en WhatsApp<span role="image">👇🏽</span></p>
                </div>
            </nav> 
        </div>
    )   
}

export default Navbar