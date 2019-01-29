import React from 'react'

export class Compras extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="compras">
          <h1> Compras</h1>
          <p>
          Para acessar a opção Compras, selecione o ícone “<u>Compras</u>” na Barra de Ferramentas.
            <img id="icone-compras"
            src="https://3.bp.blogspot.com/-r3NqkkkQYu8/W4gXtzjL4MI/AAAAAAAAAYE/uinvzMdXWtEdaBVL2fRY_n8J5gdXp-GjACLcBGAs/s1600/compras%2Bbotao.jpg"
            alt="Icone de Compras Walleg"/>
          </p>
          <p>Desta forma, a seguinte janela abaixo será aberta.</p>
            <img
            src="https://2.bp.blogspot.com/-pkrRcM3OFiw/W-RrgIfk9iI/AAAAAAAAAgs/j9qurOkavOwBjP5TMnkCr5zJ3ZZ43yEJACLcBGAs/s1600/Tela%2Bde%2BCompras.png"
            alt="Tela de Compras Walleg"/>
          <p>Para fazer um novo pedido de Compras, informe o Código do Fornecedor. Caso não saiba o número,
          clique no botão Pesquisar ao lado da descrição, conforme imagem abaixo.</p>
            <img
            src="https://4.bp.blogspot.com/-8zT_tL1PEUg/W-RrgO0sRlI/AAAAAAAAAgo/T43Hgs3p6dYUAc2oEFnWmQfyrLQzKJsJACLcBGAs/s1600/Buscar%2BFornecedor.png"
             alt="Preenchimento de Código de Fornecedor Walleg"/>
          <p>
          Após preencher o número do Fornecedor, informe o Código do Produto que deseja comprar, a quantidade, data de entrega,
          condições de pagamentos, contato e nome de quem efetuou a compra.
          </p>
      </div>
    </div>
    )
  }
}
