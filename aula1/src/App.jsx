import React from 'react'
import Adicao from './components/Adicao'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'
import Subtracao from './components/Subtracao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2} />
      <Divisao num1={2} num2={2} />
      <Multiplicacao num1={4} num2={2} />
      <Subtracao num1={5} num2={3} />
      <PrecisoEstudar course="Javascript, React, CSS" />
    </div>
  )
}

export default App