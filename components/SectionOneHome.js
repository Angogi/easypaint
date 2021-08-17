import { useState } from 'react';
import styles from '../styles/Home.module.css';
import VideoS1 from './VideoS1';
import Modal from './Modal';
import BudgetForm from './budgetfolder/BudgetForm';
import {motion} from 'framer-motion';

function SectionOneHome() {

    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
      setShowModal(true);
    };
    const handleClose = () => {
      setShowModal(false);
    };

    return (
        <section className={styles.sectionOne}>
        <VideoS1 />
        <motion.div className={styles.sectionOne__container} initial='hidden' animate='visible' variants={{
          hidden:{
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          }
        }}>
            <div className={styles.sectionBox} >
                <h1 id="text__s1">
                    ¡Easy Paint!
                    <br/>
                    <strong>Pintores profesionales y de confianza en Barcelona y Tarragona.</strong>Colaboramos contigo en todo el proceso de remodelación de <strong>Pintura de Pisos, Chalets, Locales comerciales, etcétera.</strong> <br/>
                    Trabajos de <strong>Pintura Interior y Exterior.</strong>
                    <br/>
                    Puedes estimar tu presupuesto con tan solo unos clics o <strong>contactarnos para solicitarlo.</strong><br/><span alt="hand emoji" role="img">👇🏽</span><span alt="eyes emoji" role="img">👀</span>
                </h1>
            </div>
            <div className={styles.sectionBox} >
                <motion.button onClick={handleOpen} className={styles.button__s1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                    Solicitar presupuesto
                </motion.button>
                <Modal show={showModal} onClose={handleClose}>
                  <BudgetForm onClose={handleClose}/>
                </Modal>
            </div>
        </motion.div>
    </section> 
    )
}

export default SectionOneHome
