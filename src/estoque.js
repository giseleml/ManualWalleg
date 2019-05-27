import React from 'react'

export class Estoque extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="estoque">
      <h1>Estoque</h1>
      <p>Para acessar o Ajusta de Estoque, selecione "Movimento" na Barra de Menus, e clique na opção “<u>Ajuste de Estoque</u>”. A seguinte janela será aberta:</p>
        <img
        src="https://1.bp.blogspot.com/-XgmNV6FQ_T4/XOwrrcSObeI/AAAAAAAAAxk/bY8BPDqUNV4Q_CFT52sP34xoHDAMj0iDQCLcBGAs/s1600/walleg-estoque.png"
        alt="Tela de Estoque Walleg"/>
      <p>Digite o Código do Produto ou pesquise-o na lupa. Ajuste o estoque pelos campos de Entrada (+) e Saída (-).
      Clique no botão “Salvar” para gravar as alterações.</p>
      </div>
    </div>
    )
  }
}
