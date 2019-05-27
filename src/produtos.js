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
        src="https://1.bp.blogspot.com/-TUb8BXOUc-0/XOwqO9_jh9I/AAAAAAAAAxE/BuXD6jlVeH4eCmwjYXvXrgntaNI-LzTzACLcBGAs/s1600/walleg-produtos__cadastro.png"
        alt= "Tela de Produtos Walleg"/>
        <p>Para editar um produto já cadastrado, clique na lupa de “Pesquisar” produto na Barra de Ferramentas.
        Caso necessário, utilize os filtros para pesquisar o produto.
        Clique duas vezes para abri-lo na tela de Produtos, edite os campos que deseja e clique “Salvar”.</p>
        <p><strong>Relatório:</strong> Para visualizar ou imprimir um Relatório de Produtos, clique no ícone de impressora “Relatórios”. A seguinte janela será aberta: </p>
          <img
          src="https://1.bp.blogspot.com/-bMLJkPqJ9j0/XOwqbv6IbnI/AAAAAAAAAxI/aSHcpcer114OTyfoJTzE5Z4nyDyKBEaNQCLcBGAs/s1600/walleg-produtos__relatorio.png"
          alt="Tela de Relatório de Produtos Walleg"/>
        <p>Preencha os filtros conforme necessidade e clique no ícone “Salvar”. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
      )
    }
}
