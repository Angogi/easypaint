import React from 'react';
import styles from '../styles/VideoS1.module.css';


function VideoS1() {
    return (
        <div className={styles.videoContainer}>
            <video id="video__s1" className={styles.video__s1} autoPlay loop muted>
                <source src="/videos/Fluid_Abstract_Background.mp4" type="video/mp4"/>
            </video>
            

        </div> 
    )
}

export default VideoS1