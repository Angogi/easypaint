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
// import StepsComponet from'../components/StepsComponent';
import Footer from '../components/Footer';

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
          <div className={styles.sectionOne__container}>
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
                  <button onClick={handleOpen} className={styles.button__s1}>
                      Estimar presupuesto
                  </button>
                  <Modal show={showModal} onClose={handleClose}>
                    <BudgetForm onClose={handleClose}/>
                  </Modal>
              </div>
          </div>
      </section> 
      <section className={styles.sectionTwo}>
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

        {/* <StepsComponet /> */}
      </section>

      <Footer />

    </div>
  )
}
