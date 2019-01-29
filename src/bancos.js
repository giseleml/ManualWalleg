import React from 'react'

export class Bancos extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="bancos">
        <h1>Bancos</h1>
        <p>Para acessar o cadastro de “Bancos”, selecione no Menu "<u>Catálogo</u>" > Financeiro > Bancos.</p>
        <img
        src="https://1.bp.blogspot.com/-XUMW2xR0TKI/W-RjYo0UqkI/AAAAAAAAAec/zybAioLr-E8jcJlXBikES6LSjiR5N6MYACLcBGAs/s1600/Bancos.png"
        alt="Botão Bancos Menu Walleg"
        />
        <p>Selecionando essa opção, aparecerá uma nova janela, da qual o usuário poderá cadastrar os bancos, podendo colocar informações como Agências e Contas.</p>
      </div>
    </div>
    )
  }
}
