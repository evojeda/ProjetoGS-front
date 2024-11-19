import React from 'react'
import { ErrorStyle } from "../css/ErrorStyle"

const Error = () => {
  return (
    <ErrorStyle>
      <div className='container'>
        <h1 className='hight-text'>Error 404 :</h1>
        <p className='small-text'>Ops! Não foi possível encontrar a página</p>
      </div>

    </ErrorStyle>
  )
}

export default Error