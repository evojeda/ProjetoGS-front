import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'
import LogoImage from '../images/logo-renewableenergytech.png'
import IconeUser from '../images/usuario-icone.png'
import IconeSair from '../images/sair-do-usuario.png'

const Nav =()=>{
    return(
        <NavStyle>       
        <header className="header">
          <div className='img-logo'>
            <img src={LogoImage} alt="Renewable EnergyTech" />
          </div>
          <ul className="nav-menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/sobre">Sobre</Link></li>
            <li className="menu-item"><Link to="/solucao">Solução</Link></li>
          </ul>
          <div className='icones'>
                <Link to="/cadastrar">
                    <div className='icone-login'>
                        <img src={IconeUser} alt="Usuario login" />
                        <span>Login</span>
                    </div>
                </Link>
          </div>
              <div className='icone-sair'>
                <img src={IconeSair} alt="Sair da pagina" />
              </div>
        </header>
        </NavStyle>
    )
}

export default Nav