import React, { useState, useEffect } from 'react';
import { HomeStyle } from '../css/HomeStyle'
import SlideShow from '../images/slideshow-1.jpg'
import SlideShowInfo from '../images/slideshow-2.jpg'
import SlideShowBanner from '../images/slideshow-3.jpg'
import EnergiaRenovavelimpa from '../images/energia-renovavel.png'
import EnergiaRenovavel from '../images/energia-renovavel-2.png'
import EnergiaLimpa from '../images/eneregia-limpa-1.png'
import EnergiaLimpaInfo from '../images/energia-limpa-2.png'
import EnergiaLimpaCate from '../images/energia-limpa-3.png'
import EnergiaLimpaSolu from '../images/energia-limpa-4.png'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [SlideShow, SlideShowInfo, SlideShowBanner];  

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <HomeStyle>
    <div className='container'>
      <div className='slideshow'>
      {slides.map((slide, index) => (
        <img key={index} src={slide} alt={`Banner ${index}`} className={`slide-image ${currentSlide === index ? 'show' : ''}`} /> ))}
      </div>
      <section className='info'>
          <div className='text-content'>
          <h2>Um Caminho para o Futuro Verde</h2>
          <p>A energia renovável está no centro das estratégias para um futuro verde, onde a produção e o consumo de energia são realizados com o menor impacto possível ao meio ambiente. Diferente das fontes fósseis, como o petróleo e o carvão, as energias renováveis, como a solar, eólica, hidrelétrica e biomassa, são abundantes e se renovam naturalmente, sendo essenciais para reduzir as emissões de gases de efeito estufa, proteger o meio ambiente e preservar os recursos naturais.</p>
          </div>
          <img className='img-info' src={EnergiaRenovavel} alt="Energia Renovavel" />
        </section>

        <section className='cards'>
          <h2>Nossa Solução</h2>
          <img className='info-card' src={EnergiaLimpa} alt="Energia Limpa Card" />
          <img className='info-card' src={EnergiaLimpaInfo} alt="Energia Limpa Card" />
          <img className='info-card' src={EnergiaLimpaCate} alt="Energia Limpa Card" />
          <img className='info-card' src={EnergiaLimpaSolu} alt="Energia Limpa Card" />
        </section>

        <section className='info-2'>
          <img className='img-info2' src={EnergiaRenovavelimpa} alt="Homens trabalhando" />
          <div className='text-content2'>
          <h2>Energia limpa, sustentável e renovável</h2>
          <p>Refere-se a fontes energéticas que são ambientalmente responsáveis, economicamente viáveis e disponíveis de forma contínua na natureza. Essas energias, como a solar e a eólica, não emitem poluentes (energia limpa), não se esgotam rapidamente (energia renovável) e são capazes de atender às necessidades atuais sem comprometer os recursos das futuras gerações (energia sustentável). A combinação dessas características é essencial para reduzir os impactos ambientais e promover um desenvolvimento equilibrado e acessível para todos.</p>
          </div>
        </section>

        <section className='info-3'>
          <div className='text-content3'>
          <h2>Desafios da Energia Renovável</h2>
          <p>Embora promissora, a energia renovável enfrenta desafios, como a necessidade de armazenamento de energia (para fontes variáveis, como a solar e a eólica) e a necessidade de investimentos em infraestrutura. Apesar disso, os avanços tecnológicos e os incentivos governamentais estão ajudando a superar essas barreiras.
          Esses desafios mostram que, embora o potencial das energias renováveis para transformar o setor energético seja imenso, uma transição eficaz exigirá esforços coordenados em inovação, regulamentação e infraestrutura para garantir um futuro verdadeiramente sustentável e acessível a todos.</p>
          </div>
        </section>
    </div>
    </HomeStyle>
  )
}

export default Home