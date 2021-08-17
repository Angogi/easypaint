import React from 'react';
import styles from '../styles/SectionThreeHome.module.css';
import Card from '../components/cards/CardS3';

const DataCards = [
    {
        image : '/images/faucet.png',
        text : 'Servicios de fontaneria',
    },
    {
        image : '/images/van.png',
        text : 'Vaciar piso y limpieza',
    },
    {
        image : '/images/brick.png',
        text : 'Pequeñas reformas',
    },
]


function SectionThreeHome() {
    return (
        <div className={styles.sectionThree}>
            <div className={styles.sectionThreeImages}>
                {DataCards.map((item, index)=>{
                    return(
                        <Card 
                            key={index}
                            image={item.image}
                            text={item.text}
                        />
                    )
                })}
            </div>
            <div className={styles.sectionThreeText}>
                <h2>Servicios Express</h2>
                <p>
                    En Easy Paint también puedes encontrar servicios de fontaneria, pequeñas reformas, entre otros.
                    Si necesita un servicio de emergencia puede contactarnos por WhatsApp 
                </p>
            </div>
        </div>
    )
}

export default SectionThreeHome
