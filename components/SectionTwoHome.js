import {useEffect } from 'react';
import styles from '../styles/Home.module.css';
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'; 
import Cards from '../components/cards/Card';
import { DataCards } from './cards/DataCard';
import {motion} from 'framer-motion';



function SectionTwoHome() {
    const {ref, inView} = useInView({
        threshold: 0.2
    });
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

        console.log(inView)
      
    }, [inView])


    return (
        <motion.section className={styles.sectionTwo} ref={ref}  animate={animation}>
        {DataCards.map((item, index)=>{
            return(
            <Cards 
                key={index} 
                image={item.image} 
                imageTitlle={item.imageTitle} 
                title={item.title} 
                text={item.text}
            />
            )
        })}

        </motion.section>
    )
}

export default SectionTwoHome




