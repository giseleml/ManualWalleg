import React from 'react'

export class Produtos extends React.Component {
    render(){
      return(
      <div className="main-content">
        <div id="produtos">
        <h1>Produtos</h1>
        <p>Para acessar o Cadastro de Produtos, selecione o ícone “<u>Produtos</u>” na Barra de Ferramentas.
          <img id="icone-produtos"
          src="https://4.bp.blogspot.com/-MRk8AATA9Oo/W4gWkwPL4uI/AAAAAAAAAWA/yVfh7foe6l43yoAoKPMm1M5BkI4KpD-vgCLcBGAs/s1600/produtos%2Bbotao.jpg"
          alt= "Ícone de Produtos Walleg"/>
        </p>
        <p>Desta forma, a seguinte janela abaixo será aberta. Para cadastrar um novo Produto, preencha os campos necessários e clique no botão Salvar.</p>
        <img
        src="https://3.bp.blogspot.com/-fvSEdTaUUKU/W-Rohk_ZMLI/AAAAAAAAAfs/SkpVi2WFpPoFgaAfqVt_KFcdN1SnCayjgCLcBGAs/s1600/Tela%2BProdutos.png"
        alt= "Tela de Produtos Walleg"/>
        <p>Para editar um produto já cadastrado, clique na lupa de “Pesquisar” produto na Barra de Ferramentas.
        Caso necessário, utilize os filtros para pesquisar o produto.
        Clique duas vezes para abri-lo na tela de Produtos, edite os campos que deseja e clique “Salvar”.</p>
        <p><strong>Relatório:</strong> Para visualizar ou imprimir um Relatório de Produtos, clique no ícone de impressora “Relatórios”. A seguinte janela será aberta: </p>
          <img
          src="https://1.bp.blogspot.com/-zuVcSHzM7uU/W-RohRRnEnI/AAAAAAAAAfo/uEJ-faVZL0QSvcpXc6fYQRHqHmJ62r5wgCLcBGAs/s1600/Relat%25C3%25B3rio%2BProdutos.png"
          alt="Tela de Relatório de Produtos Walleg"/>
        <p>Preencha os filtros conforme necessidade e clique no ícone “Salvar”. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
      )
    }
}
