import React from 'react';
import ReactDOM from 'react-dom';

import './components/style.scss';
import './components/header.scss';
import './components/arrow.scss';
import './components/side-nav.scss';
import './components/media-queries.scss'
import './components/scrollbar.scss'


import { Header } from './components/header.js'
import { SideNav } from './components/side-nav.js'
import { UpArrow } from './components/arrow.js'
import { LoginInicio } from './login-inicio.js'
import { TelaDeInicio } from './tela-de-inicio.js'
import { Cadastros } from './cadastros.js'
import { Bancos } from './bancos.js'
import { Clientes } from './clientes.js'
import { Fornecedores } from './fornecedores.js'
import { Funcionarios } from './funcionarios.js'
import { Produtos } from './produtos.js'
import { Estoque } from './estoque.js'
import { Retira } from './retira.js'
import { CatalogoKits } from './catalogo-de-kits'
import { Transportadoras } from './transportadoras.js'
import { Caixa } from './caixa.js'
import { Compras } from './compras.js'
import { Orcamentos } from './orcamentos.js'
import { PedidoDeVenda } from './pedido-de-venda.js'
import { Nfse } from './nfs-e.js'
import { Nfs } from './nfs.js'
import { NotaDeEntrada } from './nota-de-entrada.js'
import { RelatorioDeMov } from './relatorio-de-mov.js'

class Manual extends React.Component {
  render(){
    return(
      <div>
      <Header/>
      <SideNav/>
      <LoginInicio/>
      <TelaDeInicio/>
      <Cadastros/>
      <Bancos/>
      <Clientes/>
      <Fornecedores/>
      <Funcionarios/>
      <Produtos/>
      <Estoque/>
      <Retira/>
      <CatalogoKits/>
      <Transportadoras/>
      <Caixa/>
      <Compras/>
      <Orcamentos/>
      <PedidoDeVenda />
      <Nfse/>
      <Nfs/>
      <NotaDeEntrada/>
      <RelatorioDeMov/>
      <UpArrow />
      </div>
    )
  }
}
ReactDOM.render(<Manual/>, document.getElementById('root'));
