import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <img className="logo-walleg" src="https://1.bp.blogspot.com/-4FUIO0Ilai8/XOwa6SmESEI/AAAAAAAAAt8/_N07xDpIzu4d8tyzBGbNewncfOr6MDLtACLcBGAs/s1600/walleg-logo.png" alt = "Logo Walleg"/>
        <h1>Manual de Utilização do Sistema Walleg</h1>
        <a href="http://walleg.com.br/home" target="_blank" rel="noopener noreferrer">Ir para o Site Walleg</a>
        <a href="http://walleg.com.br/home/Contato" target="_blank" rel="noopener noreferrer">Contato</a>
      </div>
    )
  }
}
