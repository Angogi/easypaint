import styles from '../styles/Home.module.css';
import Cards from '../components/cards/Card';
import { DataCards } from './cards/DataCard';

function SectionTwoHome() {

    return (
        <section className={styles.sectionTwo} >
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

        </section>
    )
}

export default SectionTwoHome




