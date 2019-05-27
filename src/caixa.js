import React from 'react'

export class Caixa extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="caixa">
      <h1>Caixa</h1>
      <p>Para acessar a opção Caixa, selecione o ícone “<u>Caixa</u>” na Barra de Ferramentas.
         <img id="icone-caixa"
         src="https://4.bp.blogspot.com/-iv6sv8VOo0A/W4gYUINKBGI/AAAAAAAAAZA/f50TMAzShd8FAKyptcVmojDHoOXpXJPDgCLcBGAs/s1600/caixa%2Bbotao.jpg"
         alt="Icone de Caixa Walleg"/>
      </p>
      <p>Desta forma, a seguinte janela abaixo será aberta.</p>
         <img
         src="https://1.bp.blogspot.com/-qlTAMOqtEXU/XOwuXxT__gI/AAAAAAAAAyw/Oynmqb2ewl4TymAqwAqgvG2f-JroYB60gCLcBGAs/s1600/walleg-caixa.png"
         alt="Tela de Caixa Walleg"/>
      <p>
          Ao ser efetuado e gravado um pedido de Compra, automaticamente ele é encaminhado para o Caixa,
          para ser recebido e ter sua saída. Ao abrir esta janela, será possível visualizar os últimos pedidos realizados,
          que estarão disponíveis para visualização e recebimento. Marque o pedido e escolha a forma de pagamento.
      </p>
      <p>Caso o pedido não apareça automaticamente, clique no botão Atualizar.
          O pedido só aparecerá na tela do Caixa se anteriormente, na tela de Pedidos, não tenha ocorrido algum erro.</p>
      <p><strong>Relatório</strong>: Para visualizar ou imprimir um Relatório do Caixa, clique no ícone “Relatórios” na Barra de Ferramentas.
          A seguinte janela será aberta:</p>
            <img
            src="https://1.bp.blogspot.com/-dDiJE7yyXKI/XOwvjpVWGdI/AAAAAAAAAy8/jLSqWHOb1wsjNxWcR9E4Yl6im7OoO5W1gCLcBGAs/s1600/walleg-caixa__relatorio.png"
            alt="Tela de Relatórios de Caixa Walleg"/>
      <p>Preencha os filtros conforme necessidade, escolha a impressora e confirme para gerar o relatório.</p>
      </div>
    </div>
    )
  }
}
