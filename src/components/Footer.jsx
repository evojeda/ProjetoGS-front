import React from 'react'
import { FooterStyle } from '../css/FooterStyle'
import Logo from '../images/logo-renewableenergytech.png'
import Instagram from '../images/instagram.png'
import Email from '../images/gmail.png'
import Linkedin from '../images/linkedin.png'
import Whatsapp from '../images/whatsapp-footer.png'
import Facebook from '../images/facebook.png'


const Footer = () => {
  return (
    <FooterStyle>
      <footer className='footer'>
        <img className='logo-image' src={Logo} alt="Renewable EnergyTech" />
        <div className='copyright'>
          <p>© Copyright Renewable EnergyTech 2024.
          Todos os direitos reservados.</p>
        </div>
        <div className='redes-sociais'>
          <img className='icone-rede' src={Instagram} alt="Instagram" />
          <img className='icone-rede' src={Whatsapp} alt="Whatsapp" />
          <img className='icone-rede' src={Email} alt="Email" />
          <img className='icone-rede' src={Facebook} alt="Facebook" />
          <img className='icone-rede' src={Linkedin} alt="Linkedin" />
        </div>
      </footer>
    </FooterStyle>
  )
}

export default Footer