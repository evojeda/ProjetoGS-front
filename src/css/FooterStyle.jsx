import styled from "styled-components";

export const FooterStyle=styled.footer`
  bottom: 0;
  width: 100%;

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0C180B;
    padding: 10px 20px;
    margin-top: 40px;
}

.logo-image{
    height: 40px;
    padding: 10px;
}

.redes-sociais{
    display: flex;
    align-items: center;
}

.icone-rede{ 
    padding: 5px;
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
}

.icone-rede:hover {
    transform: scale(1.2);
}

.copyright p{
    color: #FFFFFF;
}
    
`