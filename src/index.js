import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './components/arrow.scss';
import './components/header.scss';
import './components/main.scss';
import './components/scrollbar.scss'
import './components/side-nav.scss';
import './components/media-queries.scss'

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
import { NotFound } from './components/notfound.js'

class Manual extends React.Component {
  render(){
    return(
      <BrowserRouter basename="/ManualWalleg">
        <Header/>
        <SideNav/>
        <Switch>
          <Route exact path="/" component={LoginInicio} />
          <Route path="/tela-inicial" component={TelaDeInicio} />
          <Route path="/cadastros" component={Cadastros} />
          <Route path="/bancos" component={Bancos} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/fornecedores" component={Fornecedores} />
          <Route path="/funcionarios" component={Funcionarios} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/estoque" component={Estoque} />
          <Route path="/retira" component={Retira} />
          <Route path="/kits" component={CatalogoKits} />
          <Route path="/transportadoras" component={Transportadoras} />
          <Route path="/caixa" component={Caixa} />
          <Route path="/compras" component={Compras} />
          <Route path="/orcamentos" component={Orcamentos} />
          <Route path="/pedido-de-venda" component={PedidoDeVenda} />
          <Route path="/nfs-e" component={Nfse} />
          <Route path="/nfs" component={Nfs} />
          <Route path="/nota-de-entrada" component={NotaDeEntrada} />
          <Route path="/relatorio" component={RelatorioDeMov} />
          <Route path="*" component={NotFound} />
        </Switch>
        <UpArrow />
      </BrowserRouter>
    )
  }
}
ReactDOM.render(<Manual/>, document.getElementById('root'));
