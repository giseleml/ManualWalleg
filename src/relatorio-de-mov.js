import React from 'react'

export class RelatorioDeMov extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="relatorio-de-mov">
      <h1>Relatório de Movimento</h1>
      <p> Para acessar o Relatório de Movimento, selecione “<u>Relatórios</u>” na Barra de Menus.</p>
        <img
         src="https://4.bp.blogspot.com/-TEGrPO3CpZI/W4gWadw6beI/AAAAAAAAAVw/tgempbBRIhcQz1AEwG7w1B1YS-AuEF6YwCLcBGAs/s1600/relatorio%2Bmovimento%2Bmenu.jpg"
         alt="Menu de Relatorio de Movimento Walleg"/>
      <p>	Desta forma, a seguinte janela abaixo será aberta.</p>
        <img
         src="https://2.bp.blogspot.com/-L9PzphEHrFg/W4gWaaW-0CI/AAAAAAAAAV0/FBwJjVwo3y83vzBxbdqSnKxYNbqArtgPwCLcBGAs/s1600/relatorio%2Bmovimento%2Btela.jpg"
         alt="Tela de Relatorio de Movimento Walleg"/>
      <p> Com ela, o usuário pode ter controle de todo o movimento gerado durante um período determinado de sua escolha.</p>
      <p>Existem seis parâmetros de abordagem para realizar a execução do Relatório de Movimento desejado:</p>
        <ol>
          <li>Relatório (Define qual Relatório o usuário deseja visualizar).</li>
          <li>Período Inicial/Final (Define qual data o usuário deseja visualizar o Relatório de Movimento).</li>
          <li>Cliente;</li>
          <li>Vendedor;</li>
          <li>NFe Inicial;</li>
          <li>Nfe Final;</li>
          <li>Produto;</li>
          <li>Parâmetros;</li>
        </ol>
      <p> Após preencher todos os campos necessários, clique em Visualizar para gerar o Relatório.</p>
      <p>Na imagem abaixo pode-se ver um exemplo de Relatório de Movimento:</p>
        <img src="https://4.bp.blogspot.com/-0dHNAa806RY/W4gWadBDgPI/AAAAAAAAAV4/sPULjoNvz443bz0HapagJJCPaVkurtBQwCLcBGAs/s1600/movimento%2Bexemplo.jpg"
         alt="Exemplo de Relatorio Walleg"/>
         </div>
       </div>
    )
  }
}
