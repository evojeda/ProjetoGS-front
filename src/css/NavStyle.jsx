import styled from "styled-components";

export const NavStyle=styled.header`

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    padding: 10px 20px;
    gap: 10px;
}

.img-logo img {
    height: 40px;
    padding: 10px;
}

.nav-menu {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}

.menu-item a {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s;
}

.menu-item a:hover {
    color: #49AE44; 
}

.icones { 
    display: flex;               
    align-items: center;         
    gap: 15px;
}

.icone-login, .icone-sair {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: transform 0.3s;
}

.icone-login:hover, .icone-sair:hover {
    transform: scale(1.1);
}

.icone-login span{
    text-decoration: none;
}

.icone-login{
    background-color: #49AE44;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    
}


.icone-login img{
    width: 24px;
    height: 24px;
}

.icone-sair {
    background-color: transparent;
    padding: 5px;
    border-radius: 5px;
}

.icone-sair img {
    height: 24px;
}

`