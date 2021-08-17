import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import ContactButtons from '../components/ContactButtons';
import SectionOne from '../components/SectionOneHome';
import SectionTwo from '../components/SectionTwoHome';
import SectionThree from '../components/SectionThreeHome';
import Footer from '../components/Footer';



export default function Home() {



   return (
    <div className={styles.home}>
      <Head>
        <title>Easy Paint</title>
        <meta name="description" content="Pintores profesionales en Barcelona y Tarragona"/>
        <link rel="icon" href='cepillo-de-pintura-en-rollo.png'/>
      </Head>

     <Navbar/>
     <ContactButtons/>

      <SectionOne/>
                 
      <SectionTwo/>

      <SectionThree />
      
      <Footer />

    </div>
  )
}
