import React from 'react'

export class RelatorioDeMov extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="relatorio-de-mov">
      <h1>Relatório de Movimento</h1>
      <p> Para acessar o Relatório de Movimento, selecione “<u>Relatórios</u>” na Barra de Menus.</p>
        <img
         src="https://1.bp.blogspot.com/-G7Qj8kV7TbM/XOw3Q3OmlnI/AAAAAAAAA1g/y4lgrjDXvP0t5pK6MzYQg8-GOryIIUmPgCLcBGAs/s1600/walleg-relatoriomov__menu.png"
         alt="Menu de Relatorio de Movimento Walleg"/>
      <p>	Desta forma, a seguinte janela abaixo será aberta.</p>
        <img
         src="https://1.bp.blogspot.com/-PTyDbcY9Yk0/XOw3Qwi9OdI/AAAAAAAAA1k/So58VgpqVWIPY5bSk_sqfkui8H9qpcciACLcBGAs/s1600/walleg-relatoriomov.png"
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
        <img src="https://1.bp.blogspot.com/-Q_RtbtlWG7I/XOw3rW8xe5I/AAAAAAAAA1w/aeJDaoF2jAQEOUttrlM0hEwE9fP2fkvPACLcBGAs/s1600/walleg-relatorio__movimentoexemplo.jpg"
         alt="Exemplo de Relatorio Walleg"/>
         </div>
       </div>
    )
  }
}
