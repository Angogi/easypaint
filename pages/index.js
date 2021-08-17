import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import ContactButtons from '../components/ContactButtons';
import VideoS1 from '../components/VideoS1';
import Modal from '../components/Modal';
import BudgetForm from '../components/budgetfolder/BudgetForm';
import { DataCards } from '../components/cards/DataCard';
import Cards from '../components/cards/Card';
import SectionTwo from '../components/SectionTwoHome';
import SectionThree from '../components/SectionThreeHome';
import Footer from '../components/Footer';
import {motion} from 'framer-motion';



export default function Home() {

  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

   return (
    <div className={styles.home}>
      <Head>
        <title>Easy Paint</title>
        <meta name="description" content="Pintores profesionales en Barcelona y Tarragona"/>
        <link rel="icon" href='cepillo-de-pintura-en-rollo.png'/>
      </Head>

     <Navbar/>
     <ContactButtons/>

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
                 
      <SectionTwo/>

      <SectionThree />
      
      <Footer />

    </div>
  )
}
