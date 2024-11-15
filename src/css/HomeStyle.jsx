import styled from "styled-components";

export const HomeStyle=styled.div`

.container {
    background-color: #000;
    text-align: center;

}

.slideshow {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
}

.slide-image {
    width: 100%;
    height: 100%;  
    object-fit: cover; 
    opacity: 0;
    transition: opacity 1s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
}

.slide-image.show {
    opacity: 1;
}

.info {
    display: flex;
    align-items: center;
    padding: 30px;
    color: #fff; 
    max-width: 1200px;
    margin: 0 auto;
}

.text-content {
    padding-right: 20px;
    text-align: left; 
}

.text-content h2 {
    color: #4CAF50; 
    font-size: 24px;
    margin-bottom: 10px;
}

.text-content p {
    color: #fff; 
    font-size: 16px;
    line-height: 1.5;
}

.img-info {
    max-width: 500px;
    height: auto;
    border-radius: 8px;
}

.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    padding: 20px;
    flex-wrap: wrap;
}

.cards h2 {
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 24px;
    margin-bottom: 20px;
}

.info-card {
    width: 230px;
    height: 230px;
    padding: 20px;
    display: flex;
    transition: transform 0.3s ease;
}

.info-card:hover {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.info-2{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: #fff; 
    max-width: 1200px;
    margin: 0 auto;
}

.text-content2{
    padding-right: 20px;
    text-align: left; 
}

.text-content2 h2 {
    color: #4CAF50; 
    font-size: 24px;
    margin-bottom: 10px;
}

.text-content2 p {
    color: #fff; 
    font-size: 16px;
    line-height: 1.5;
}

.img-info2 {
    width: 500px;
    height: auto;
}

.info-3 {
    background-color: #fff;
    padding: 30px 20px;
    text-align: center;
    text-align: center;
}

.text-content3 {
    max-width: 800px;
    margin: 0 auto;
}

.text-content3 h2 {
    color: #49AE44;
    font-size: 1.8em;
}

.text-content3 p {
    color: #000;
    font-size: 16px;
    line-height: 1.6;
}
`