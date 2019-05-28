import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <img className="logo-walleg" src="https://1.bp.blogspot.com/--8K7QPoVvdg/XO1ZmPR_l4I/AAAAAAAAA3Q/gu1RRp4YDGAvkl1H1NBSbSNS_gKHQ7MQgCLcBGAs/s1600/walleg-logo.png" alt = "Logo Walleg"/>
        <h1>Manual de Utilização do Sistema Walleg</h1>
        <a href="http://walleg.com.br/home" target="_blank" rel="noopener noreferrer">Ir para o Site Walleg</a>
      </div>
    )
  }
}
