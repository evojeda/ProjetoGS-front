import React from 'react'
import { SolucaoStyle } from '../css/SolucaoStyle'

import BannerImagem from '../images/solucaoreno.png' 


import Img1 from '../images/iconso1.png'
import Img2 from '../images/iconsolu2.png'
import Img3 from '../images/iconsolu3.png'
import Img4 from '../images/iconsolu4.png'

const Solucao = () => {
  return (
    <SolucaoStyle>
      <div className="content">
        <div className="banner-container">
          <img src={BannerImagem} alt="Banner Solução" className="banner-image" />
        </div>
        <section className="four-images-section">
          <div className="image-text-container">
            <img src={Img1} alt="Energia Renovável 1" className="section-image" />
            <div className="text-container">
              <p>Uma das soluções propostas é ajustar o ângulo de incidência dos painéis solares ao longo do dia. Para maximiza a captura de luz solar, promovendo maior eficiência na geração de energia. Essa otimização não só reduz os custos com energia, mas também contribui para um uso mais sustentável dos recursos naturais.</p>
            </div>
          </div>

          <div className="image-text-container">
            <img src={Img2} alt="Energia Renovável 2" className="section-image" />
            <div className="text-container">
              <p>A aplicação de derivadas e limites permite analisar e prever o impacto da velocidade do vento na produção de energia das turbinas eólicas. Com isso, é possível realizar ajustes precisos na operação, protegendo os equipamentos contra condições extremas e otimizando o desempenho.</p>
            </div>
          </div>

          <div className="image-text-container">
            <img src={Img3} alt="Energia 3" className="section-image" />
            <div className="text-container">
              <p>Compreender como pequenas variações na velocidade do vento afetam a produção de energia possibilita ajustes em tempo real nos sistemas de controle das turbinas eólicas. Essa solução maximiza a eficiência energética e garante uma operação segura e adaptativa, mesmo em condições desafiadoras.</p>
            </div>
          </div>

          <div className="image-text-container">
            <img src={Img4} alt="Energia 4" className="section-image" />
            <div className="text-container">
              <p>Combinando o ESP32 e sensores de corrente e tensão, é possível implementar um sistema de monitoramento em tempo real do consumo de energia. Essa solução acessível e escalável pode ser aplicada em residências, empresas e indústrias. A integração com interfaces de monitoramento remoto permite ajustes imediatos, otimizando o uso de energia, reduzindo desperdícios e promovendo maior controle sobre os recursos.</p>
            </div>
          </div>
        </section>
      </div>
    </SolucaoStyle>
  );
};

export default Solucao