
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CadastrarStyle } from '../css/CadastrarStyle'
import Logo from '../images/logo-renewableenergytech.png'
import ImageFull from '../images/image-cadastro.jpg'
import IconeUser from '../images/usuario-icone.png'
import IconePerfil from '../images/perfil-de-usuario.png'
import IconeEmail from '../images/o-email.png'
import IconeSenha from '../images/cadeado.png'

const Cadastrar = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Nome:', name)
    console.log('Email:', email)
    console.log('Senha:', password)

    navigate('/')
  }

  return (
    <CadastrarStyle>
    <div className='container-cadastro'>
      <div className='full-img'>
        <img src={ImageFull} alt="" />
      </div>

      <div className='img-logo'>
        <img src={Logo} alt="Renewable EnergyTech" />
      </div>

      <div className='msg-inicio'>
        <img className='icone-user' src={IconeUser} alt="Icone Usuario" />
        <h2>Seja Bem-Vindo!</h2>
        <p>Faça seu cadastro</p>

        <div className='form-cadastro'>
          <form onSubmit={handleSubmit} id="signup-form">
            <div className="form-group">
              <label htmlFor="name"></label>
              <div className="input1">
                  <img src={IconePerfil} alt="Ícone Perfil" className="input-icon" />
                  <input type="text" id="name" name="name" placeholder="Digite seu nome" required />
                </div>
            </div>

            <div className="form-group">
              <label htmlFor="email"></label>
              <div className="input2">
                  <img src={IconeEmail} alt="Ícone Email" className="input-icon2" />
                  <input type="text" id="email" name="email" placeholder="Digite seu e-mail" required />
                </div>
            </div>

            <div className="form-group">
              <label htmlFor="password"></label>
              <div className="input3">
                  <img src={IconeSenha} alt="Ícone Senha" className="input-icon3" />
                  <input type="password" id="password" name="password" placeholder="Digite sua senha" required minLength="6" />
                </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password"></label>
              <div className="input4">
                  <img src={IconeSenha} alt="Ícone Senha" className="input-icon4" />
                  <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha" required />
              </div>
            </div>

            <button type="submit">Cadastrar</button>
          </form>

          <div className="login-link">
              <p>Já tem cadastro? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  </CadastrarStyle>
  )
}

export default Cadastrar