import styled from 'styled-components';

export const SolucaoStyle = styled.div`
  .content {
    max-width: 1700px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Banner */
  .banner-container {
    margin-bottom: 20px;
    text-align: center;
  }

  .banner-image {
    width: 1700px; 
    max-width: 100%; 
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  }

  /* Imagens com textos */
  .four-images-section {
    margin-top: 60px;
  }

  .image-text-container {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .section-image {
    width: 45%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .text-container {
    width: 45%;
    padding: 20px;
    color: #ff6600; /* Aqui você pode definir a cor desejada */
  }

  .text-container h3 {
    font-size: 1.8rem;
    color: white; /* Cor do título em branco */
    margin-bottom: 10px;
  }

  .text-container p {
    font-size: 1.2rem;
    color: white; /* Cor do parágrafo em branco */
    line-height: 1.6;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .image-text-container {
      flex-direction: column;
      align-items: center;
    }

    .section-image, .text-container {
      width: 100%;
      text-align: center;
    }

    .text-container {
      padding: 10px;
    }
  }
`
