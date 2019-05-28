import React from 'react';
import { Link } from "react-router-dom";

export class SideNav extends React.Component {
  render() {
    return(
      <div>
      <div className="side-nav-info">
        <img className="logo-walleg" src="https://1.bp.blogspot.com/--8K7QPoVvdg/XO1ZmPR_l4I/AAAAAAAAA3Q/gu1RRp4YDGAvkl1H1NBSbSNS_gKHQ7MQgCLcBGAs/s1600/walleg-logo.png" alt = "Logo Walleg"/>
      </div>
      <div className="side-nav">
        <Link to="/">Login e Início</Link>
        <Link to="/tela-inicial">Tela de Início</Link>
        <Link to="/cadastros">Cadastros</Link>
        <Link to="/bancos">Bancos</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/fornecedores">Fornecedores</Link>
        <Link to="/funcionarios">Funcionários</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/estoque">Estoque</Link>
        <Link to="/retira">Retira</Link>
        <Link to="/kits">Catálogo de Kits</Link>
        <Link to="/transportadoras">Transportadoras</Link>
        <Link to="/caixa">Caixa</Link>
        <Link to="/compras">Compras</Link>
        <Link to="/contas">Contas</Link>
        <Link to="orcamentos">Orçamentos</Link>
        <Link to="/pedido-de-venda">Pedido de Venda</Link>
        <Link to="/nfs-e">Nota Fiscal de Serviço (NFS-e)</Link>
        <Link to="/nfs">Nota Fiscal de Saída</Link>
        <Link to="/nota-de-entrada">Nota Fiscal de Entrada</Link>
        <Link to="/relatorio">Relatório de Movimento</Link>
      </div>
     </div>
    )
  }
}
