import {useEffect } from 'react';
import styles from '../styles/Home.module.css';
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'; 
import Cards from '../components/cards/Card';
import { DataCards } from './cards/DataCard';


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
        <section className={styles.sectionTwo} ref={ref}  >
        {DataCards.map((item, index)=>{
            return(
            <Cards 
                key={index} 
                image={item.image} 
                imageTitlle={item.imageTitle} 
                title={item.title} 
                text={item.text}
                animate={animation}
            />
            )
        })}

        </section>
    )
}

export default SectionTwoHome




