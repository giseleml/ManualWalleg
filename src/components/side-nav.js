import React from 'react';

export class SideNav extends React.Component {
  render() {
    return(
      <div>
      <div className="side-nav-info">
        <img id="logo-walleg" src="http://walleg.com.br/Img/logo.png" alt = "Logo Walleg"/>
      </div>
      <div className="side-nav">
           <a href="#login-inicio">Login e Início</a>
           <a href="#tela-de-inicio">Tela de Início</a>
           <a href="#cadastros">Cadastros</a>
           <a href="#bancos">Bancos</a>
           <a href="#clientes">Clientes</a>
           <a href="#fornecedores">Fornecedores</a>
           <a href="#funcionarios">Funcionários</a>
           <a href="#produtos">Produtos</a>
           <a href="#estoque">Estoque</a>
           <a href="#retira">Retira</a>
           <a href="#catalogo-de-kits">Catálogo de Kits</a>
           <a href="#transportadoras">Transportadoras</a>
           <a href="#caixa">Caixa</a>
           <a href="#compras">Compras</a>
           <a href="#orcamentos">Orçamentos</a>
           <a href="#pedido-de-venda">Pedido de Venda</a>
           <a href="#nfs-e">Nota Fiscal de Serviço (NFS-e)</a>
           <a href="#nfs">Nota Fiscal de Saída</a>
           <a href="#nota-de-entrada">Nota Fiscal de Entrada</a>
           <a href="#relatorio-de-mov">Relatório de Movimento</a>
         </div>
       </div>
    )
  }
}
