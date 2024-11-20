import styled from "styled-components";

export const LoginStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  .container-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .img-full {
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
  margin-bottom: 20px;
}

.img-logo img {
  width: 150px;
  height: auto;
  margin-bottom: 42px;
}


  .msg-login {
    text-align: center;
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

.form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
}

.form-group {
    margin-bottom: 20px;
    width: 100%;
}

.input-icon1, .input-icon2 {
    display: flex;
    align-items: center;
    position: relative;
}

.input-icon1 img, .input-icon2 img {
    position: absolute;
    left: 10px;
    width: 20px;
}

input {
    width: 100%;
    padding: 10px 20px 10px 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

input:focus {
    outline: none;
    border-color: #49AE44;
    box-shadow: 0 0 5px rgba(73, 174, 68, 0.5);
}
    

button {    
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
`;
