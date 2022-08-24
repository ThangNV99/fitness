import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, 
    animi culpa nobis nemo natus doloremque?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='https://www.google.com/intl/vi/gmail/about/' target="_blank" rel='nnoopener noreferrer'><MdEmail/></a>
          <a href='https://www.messenger.com/' target="_blank" rel='nnoopener noreferrer'><BsMessenger/></a>
          <a href='https://web.whatsapp.com/' target="_blank" rel='nnoopener noreferrer'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact