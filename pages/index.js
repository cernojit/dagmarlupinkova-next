import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar';
import About from '../components/about/About';
import ImgContainer from '../components/imgContainer/ImgContainer';
import IconContainer from '../components/iconContainer/IconContainer';
import ContactSection from '../components/contactPage/ContactSection';
import Footer from '../components/footer/Footer'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Advokátka Mgr. Dagmar Lupínková</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="právnické služby - advokátka Dagmar Lupínková"/>
        <meta name="description" content="Brandýs nad Labem"/>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>            
        <link href="./static/Navbar.module.css" rel="stylesheet"/>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <Navbar/>
      <ImgContainer/> 
      <About/>     
      <IconContainer/>
      <ContactSection/>
      <Footer/>

    </div>
  )
}
