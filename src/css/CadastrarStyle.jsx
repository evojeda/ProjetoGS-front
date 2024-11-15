import styled from "styled-components";

export const CadastrarStyle = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

.container-cadastro {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden; 
}

.full-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    background-repeat: no-repeat;
    z-index: -1; 
}

.img-logo {
    display: flex;
    justify-content: center;
}

.img-logo img{
    width: 150px;
    height: auto;
}

.msg-inicio {
    text-align: center;
    padding: 30px 20px;
    display: flex;
    flex-direction: column; 
    align-items: center;  
}

.icone-user {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}

h2 {
    margin-bottom: 10px;
    font-size: 1.8rem;
    color: #fff;
}

p {
    margin-bottom: 20px;
    color: #fff;
}

.form-cadastro {
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
}

.input1,
.input2,
.input3,
.input4 {
    position: relative;

.input-icon,
.input-icon2,
.input-icon3,
.input-icon4 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    pointer-events: none;
}

input {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
}

input:focus {
    outline: none;
    border-color: #49AE44;
    box-shadow: 0 0 5px rgba(73, 174, 68, 0.5);
        }
    }
}

button {
    padding: 10px 15px;
    background: #49ae44;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;

&:hover {
    background: #3a8c36;
        }
      }
    }
}

.login-link {
  text-align: center;
  margin-top: 20px;
}

.login-link a {
  color: #49AE44; /* Cor do link */
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
`

