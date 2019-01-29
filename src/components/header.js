import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <img id="logo-walleg" src="http://walleg.com.br/Img/logo.png" alt = "Logo Walleg"/>
        <h1>Manual de Utilização do Sistema Walleg</h1>
        <a href="http://walleg.com.br/home" target="_blank" rel="noopener noreferrer">Ir para o Site Walleg</a>
        <a href="http://walleg.com.br/home/Contato" target="_blank" rel="noopener noreferrer">Contato</a>
      </div>
    )
  }
}
