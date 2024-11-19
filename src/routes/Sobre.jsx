import React from 'react'
import {SobreStyle} from "../css/SobreStyle"
import QuizGame from '../components/QuizGame';

const Sobre = () => {
  return (
    <SobreStyle>
    <div className="container">
      <div className="header">
        <h2>Sobre Energia Renovável:</h2>
        <h3>Oportunidades para um Futuro Sustentável</h3>
      </div>
      <div className="content">
        <p>
          Este tema foi proposto pela faculdade FIAP em parceria com Vanessa Grunwald.
          A energia renovável segue tendências transformadoras, como a digitalização, que facilita o
          gerenciamento remoto e a eficiência; a descentralização, que amplia o acesso a regiões isoladas;
          a descarbonização, focada em reduzir as emissões de carbono; e a democratização, que permite
          que cada vez mais pessoas gerem sua própria energia, criando “prosumidores” no sistema.
        </p>
        <p>
          Essas tendências e desafios evidenciam o potencial da energia renovável como uma solução
          sustentável e acessível para todos. Com o apoio contínuo da inovação, regulamentação e
          infraestrutura, a transição energética promete transformar o setor e construir um futuro
          verdadeiramente verde e responsável.
        </p>
      </div>
      <div className="quiz">
          <QuizGame />
        </div>
    </div>

    </SobreStyle>
  )
}

export default Sobre