import React from 'react'

export class Funcionarios extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="funcionarios">
      <h1>Funcionários</h1>
      <p>Para acessar o Cadastro de Funcionários, selecione “Arquivo” na Barra de Menus, e clique na opção “<u>Vendedores</u>”.</p>
        <img
        src="https://4.bp.blogspot.com/-fmVQRqtCvdc/W4gXYFCTriI/AAAAAAAAAXc/ncBo3IRrlic4RzBadKnx5zIH1b4MRNwugCLcBGAs/s1600/funcionarios%2Bbotao.jpg"
        alt="Menu Funcionários Walleg"/>
      <p>Desta forma, a seguinte janela abaixo será aberta. Para cadastrar um novo Funcionário,
      preencha todos os campos com as informações do mesmo. Ao terminar, clique no botão “Gravar Alterações”.</p>
        <img
        src="https://2.bp.blogspot.com/-OTKOoW9YQNI/W-RnfGN9HMI/AAAAAAAAAfY/QyttB4D4PTkVTYGVgBMuC2fki8c5cnGfQCLcBGAs/s1600/Cadastro%2BFuncion%25C3%25A1rios.png"
        alt="Tela de Cadastro de Funcionários Walleg"/>
      <p>O usuário também pode editar as informações de funcionários já cadastrados, clicando na opção “Pesquisar Funcionários”, e em seguida selecionando “Editar”.
      Na parte inferior da janela de Cadastro estão os atalhos que podem ser usados para os botões de comando.</p>
      <p>OBS.: A caixa “Código” será preenchida automaticamente pelo sistema após a efetuação de um novo cadastro.</p>
      <p><strong>Relatório:</strong> Para visualizar ou imprimir um Relatório de Funcionários, clique no ícone de impressora “Imprimir Documento”.
      A seguinte janela será aberta:</p>
        <img
        src="https://3.bp.blogspot.com/-6dAnVzrmMZg/W-RnfHkfwmI/AAAAAAAAAfc/04Vov_r6QKI9ozioLmMFz_u1HEq2O_B1gCLcBGAs/s1600/Relatorio%2BFuncion%25C3%25A1rios.png"
        alt="Relatorio de Funcionarios Walleg"/>
      <p>Preencha os filtros conforme necessidade e clique no ícone de Impressora “Imprimir”. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
    )
  }
}
