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
        <title>Dagmar Lupínková</title>
        <link href="./static/Navbar.module.css" rel="stylesheet"/>
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
