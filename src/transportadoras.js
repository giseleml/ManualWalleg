import React from 'react'

export class Transportadoras extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="transportadoras">
      <h1>Transportadoras</h1>
      <p>Para acessar o cadastro de transportadoras, selecione “Arquivo” na Barra de Menus, e clique na opção “<u>Transportadoras</u>”.</p>
        <img
        src="https://1.bp.blogspot.com/-hh3DMTpHnSY/XOwtJxQfjVI/AAAAAAAAAyM/WHTYECiynwAvW_ogrLy02jf77IK3JjVFQCLcBGAs/s1600/walleg-transportadoras.png"
        alt="Menu de Transportadoras Walleg"/>
      <p>Desta forma, a seguinte janela abaixo será aberta. Sua função é salvar os dados das Transportadoras
      para utilizar futuramente na Nota Fiscal, de forma que não seja necessário preenchê-la novamente na hora da utilização.</p>
        <img 
        src="https://1.bp.blogspot.com/-l6atOPv80Cs/XOwthp0VPPI/AAAAAAAAAyU/QhK1xq9ViJMnDs7740mVt-6CErz_vdIhQCLcBGAs/s1600/walleg-transportadoras__cadastro.png"
        alt="Tela de Transportadoras Walleg"/>
      <p><strong>Relatório</strong>: Para visualizar ou imprimir um Relatório de Transportadoras,
             clique no ícone de impressora “Imprimir Documento”. A seguinte janela será aberta:</p>
         <img 
         src="https://1.bp.blogspot.com/-uv2toD9LCR4/XOwt51uR0HI/AAAAAAAAAyo/JebVVmYqYMcqDiwB92yXiSro4el-MTpAgCLcBGAs/s1600/walleg-transportadoras__relatorio.png"
         alt="Tela de Relatorios de Transportadoras Walleg"/>
           <p>Preencha os filtros conforme necessidade e clique no ícone de Impressora “Imprimir”. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
    )
  }
}
