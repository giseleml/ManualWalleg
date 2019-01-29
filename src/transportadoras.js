import React from 'react'

export class Transportadoras extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="transportadoras">
      <h1>Transportadoras</h1>
      <p>Para acessar o cadastro de transportadoras, selecione “Arquivo” na Barra de Menus, e clique na opção “<u>Transportadoras</u>”.</p>
        <img
        src="https://3.bp.blogspot.com/-q7_cM_dA8Bo/W4gWFtRC1HI/AAAAAAAAAVU/mShqS5ZbSSkqENUuu03MrFfy3STOiTz-ACLcBGAs/s1600/transportadoras%2Bbotao.jpg"
        alt="Menu de Transportadoras Walleg"/>
      <p>Desta forma, a seguinte janela abaixo será aberta. Sua função é salvar os dados das Transportadoras
      para utilizar futuramente na Nota Fiscal, de forma que não seja necessário preenchê-la novamente na hora da utilização.</p>
        <img id="img-transp1"
        src="https://4.bp.blogspot.com/-66PUOZRulL4/W-RqRizSz2I/AAAAAAAAAgQ/FBcXVyYudQI_2NQSRZ4dTShUeyLrjm9jQCLcBGAs/s1600/Tela%2BTransportadoras.png"
        alt="Tela de Transportadoras Walleg"/>
      <p><strong>Relatório</strong>: Para visualizar ou imprimir um Relatório de Transportadoras,
             clique no ícone de impressora “Imprimir Documento”. A seguinte janela será aberta:</p>
         <img id="img-transp2"
         src="https://4.bp.blogspot.com/-OFF3k_s8aM0/W-RqRpZU7QI/AAAAAAAAAgM/-Ah3lJCfhmUMIgBwJazJoT1841Rk-oz4gCLcBGAs/s1600/Relatorio%2BTransportadoras.png"
         alt="Tela de Relatorios de Transportadoras Walleg"/>
           <p>Preencha os filtros conforme necessidade e clique no ícone de Impressora “Imprimir”. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
    )
  }
}
