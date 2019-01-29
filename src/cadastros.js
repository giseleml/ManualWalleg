import React from 'react'

export class Cadastros extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="cadastros">
      <h1>Cadastros</h1>
      <p> O sistema Walleg possui uma série de opções para cadastrar diferentes funções a serem realizadas no programa. As mais utilizadas são: </p>
        <ul>
          <li>Cadastro de Bancos;</li>
          <li>Cadastro de Fornecedores;</li>
          <li>Cadastro de Funcionários;</li>
          <li>Cadastro de Produtos;</li>
          <li>Cadastro de Transportadoras;</li>
          <li>Cadastro de Usuários.</li>
        </ul>
      </div>
    </div>
    )
  }
}
