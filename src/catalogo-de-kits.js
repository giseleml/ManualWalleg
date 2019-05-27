import React from 'react'

export class CatalogoKits extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="catalogo-de-kits">
      <h1>Catálogo de Kits</h1>
      <p>Para acessar o Catálogo de Kits, selecione “Arquivo” na Barra de Menus, e clique na opção “<u>Kits</u>”.</p>
        <img
        src="https://1.bp.blogspot.com/-FFuU9cTvGpA/XOwswH1MGMI/AAAAAAAAAyE/sHSinjU01GsQgKtGSZPDTYAd9MczabuOQCLcBGAs/s1600/walleg-kits.png"
        alt="Menu de Kits Walleg"/>
      <p>Desta forma, a seguinte janela abaixo será aberta. Preencha os dados necessários e clique “Adicionar”
      para registrar o novo Kit. Utilize o ícone “Limpar Tela” para esvaziar os campos, e o ícone “Excluir Registro” para excluir o kit.</p>
      </div>
    </div>
    )
  }
}
