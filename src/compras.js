import React from 'react'

export class Compras extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="compras">
          <h1> Compras</h1>
          <p>
          Para acessar a opção Compras, selecione o ícone “<u>Compras</u>” na Barra de Ferramentas.
            <img 
            src="https://3.bp.blogspot.com/-r3NqkkkQYu8/W4gXtzjL4MI/AAAAAAAAAYE/uinvzMdXWtEdaBVL2fRY_n8J5gdXp-GjACLcBGAs/s1600/compras%2Bbotao.jpg"
            alt="Icone de Compras Walleg"/>
          </p>
          <p>Desta forma, a seguinte janela abaixo será aberta.</p>
            <img
            src="https://1.bp.blogspot.com/-k1M_Zq3WElI/XOwwZxq55MI/AAAAAAAAAzI/9Naz7eBKPFsnbJkPim7DRW7hB-QvCMFdQCLcBGAs/s1600/walleg-compras.png"
            alt="Tela de Compras Walleg"/>
          <p>Para fazer um novo pedido de Compras, informe o Código do Fornecedor. Caso não saiba o número,
          clique no botão Pesquisar ao lado da descrição, conforme imagem abaixo.</p>
            <img
            src="https://1.bp.blogspot.com/-o-lvvlgzhuo/XOwwZwVMRZI/AAAAAAAAAzE/G-viE6Ce1i0ssM4EBSdaPNwDd3zF-pEkgCLcBGAs/s1600/walleg-compras__busca.png"
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
