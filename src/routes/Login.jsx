import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { LoginStyle } from '../css/LoginStyle'
import Logo from '../images/logo-renewableenergytech.png'
import FullImage from  '../images/image-login.jpg'
import IconeUser from '../images/usuario-icone.png'
import IconeEmail from '../images/o-email.png'
import IconeSenha from '../images/cadeado.png'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email)
    console.log('Password:', password)

    navigate('/')
  }

  return (
    <LoginStyle>
    <div className='container-login'>
      <div className='img-full'>
        <img src={FullImage} alt="" />
      </div>

        <div className='img-logo'>
          <img src={Logo} alt="Renewable EnergyTech" />
        </div>

        <div className='msg-login'>
          <img className='icone-user' src={IconeUser} alt="Icone Usuario" />
          <h2>Bem-Vindo de volta!</h2>
          <p>Faça seu Login</p>
        </div>

        <div className='form-login'>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email"></label>
              <div className='input-icon1'>
              <img src={IconeEmail} alt="Icone Email" />
              <input type="email" id="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password"></label>
              <div className='input-icon2'>
              <img src={IconeSenha} alt="Icone Senha" />
              <input type="password" id="password" name="password" placeholder="Digite sua senha" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
    </div>
    </LoginStyle>
  )
}

export default Login