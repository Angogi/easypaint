import styles from '../../styles/CardS3.module.css';
import Image from 'next/image';

function CardS3(props) {
    return (
        <div className={styles.cardS3}>
            <Image width={350} height={150} src={props.image}/>
            <div className={styles.textCardS3} >
                <h4>{props.text}</h4>
            </div>
        </div>
    )
}

export default CardS3
