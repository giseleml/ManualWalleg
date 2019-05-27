import React from 'react'

export class TelaDeInicio extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="tela-de-inicio">
      <h1>Tela de Início</h1>
        <img
        src="https://1.bp.blogspot.com/-C69wjYdqgEI/XOwie6Gp5kI/AAAAAAAAAu8/7kVA6Zi64LY5ftS0ZWbKVFliCa35fZpGwCLcBGAs/s1600/walleg-tela-de-inicio.png"
        alt="Barra de Menu e Ferramentas Walleg"/>
      <p>Na tela de início do sistema Walleg, assim como na figura acima pode-se encontrar duas barras de extrema importância para o programa,
      pois compõem todas as ações que ele poderá executar. Essas barras são:</p>
        <ul>
          <li><u>Barra de Menus</u></li>
          <li><u>Barra de Ferramentas</u></li>
        </ul>
      </div>
    </div>
    )
  }
}
