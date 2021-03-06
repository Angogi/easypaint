import styles from '../../styles/Card.module.css';
import Image from 'next/image';
import {motion} from 'framer-motion';

export default function Card(props) {

    return (
        <motion.div 
            className={styles.card} 
        >
            <Image className={styles.img} width={500} height={333} alt={props.imageTitle} src={props.image} />
            <div className={styles.cardContent}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </motion.div>
    )
}
