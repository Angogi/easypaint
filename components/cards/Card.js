import styles from '../../styles/Card.module.css';
import Image from 'next/image';
import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

export default function Card(props) {

    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x:0,
                transition:{
                    type:'spring', duration: 1, bounce: 0.3
                }
            })
        }
        if(!inView){
            animation.start({
                x: '-100vw'
            })
        }
       
    }, [inView])

    return (
        <motion.div 
            className={styles.card} 
            ref={ref}
            animate={animation}
        >
            <Image className={styles.img} width={500} height={333} alt={props.imageTitle} src={props.image} />
            <div className={styles.cardContent}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </motion.div>
    )
}
