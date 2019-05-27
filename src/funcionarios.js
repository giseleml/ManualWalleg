import React from 'react'

export class Funcionarios extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="funcionarios">
      <h1>Funcionários</h1>
      <p>Para acessar o Cadastro de Funcionários, selecione “Arquivo” na Barra de Menus, e clique na opção “<u>Vendedores</u>”.</p>
        <img
        src="https://1.bp.blogspot.com/-AIArzZBQgR0/XOwodiELa3I/AAAAAAAAAwc/bzJlNZJm5EgC52l032HUP6Gh7vhoKKSCwCEwYBhgL/s1600/walleg-vendedores.png"
        alt="Menu Funcionários Walleg"/>
      <p>Desta forma, a seguinte janela abaixo será aberta. Para cadastrar um novo Funcionário,
      preencha todos os campos com as informações do mesmo. Ao terminar, clique no botão “Gravar Alterações”.</p>
        <img
        src="https://1.bp.blogspot.com/-V70LL2aZ2P8/XOwpWy7N3ZI/AAAAAAAAAww/CsnCHsQTGDA8RNu9OUfDhslCht4appHvQCLcBGAs/s1600/walleg-funcionarios__cadastro.png"
        alt="Tela de Cadastro de Funcionários Walleg"/>
      <p>O usuário também pode editar as informações de funcionários já cadastrados, clicando na opção “Pesquisar Funcionários”, e em seguida selecionando “Editar”.
      Na parte inferior da janela de Cadastro estão os atalhos que podem ser usados para os botões de comando.</p>
      <p>OBS.: A caixa “Código” será preenchida automaticamente pelo sistema após a efetuação de um novo cadastro.</p>
      <p><strong>Relatório:</strong> Para visualizar ou imprimir um Relatório de Funcionários, clique no ícone de impressora “Imprimir Documento”.
      A seguinte janela será aberta:</p>
        <img
        src="https://1.bp.blogspot.com/-j4iFcKMaG4Q/XOwpp3mFjMI/AAAAAAAAAw4/4yBs-yth8HAU9krQ-ulOlu_NT9ljyOT3QCLcBGAs/s1600/walleg-funcionarios__relatorio.png"
        alt="Relatorio de Funcionarios Walleg"/>
      <p>Preencha os filtros conforme necessidade e clique no ícone de Impressora “Imprimir”. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
    )
  }
}
