import React from 'react'

export class Orcamentos extends React.Component {
    render(){
      return(
      <div className="main-content">
        <div id="orcamentos">
        <h1>Orçamentos</h1>
      <p>Para acessar a opção Orçamentos, selecione o ícone “<u>Orçamentos</u>” na Barra de Ferramentas.
        <img
        src="https://2.bp.blogspot.com/-1ptIkVbzaoc/W4gXt867VsI/AAAAAAAAAYk/Y9zJcEXBv54ODJFVyo9jmIEBJaqNnS1MwCEwYBhgL/s1600/botao%2Bor%25C3%25A7amentos.jpg"
        alt="Botão de Orçamentos Walleg"/>
      </p>
      <p> Desta forma, a seguinte janela abaixo será aberta.</p>
        <img
        src="https://1.bp.blogspot.com/-epsugM1neDo/XOwxQB8KtYI/AAAAAAAAAzg/tA4bksDC-ioH-HbsqruolHegfEEq_3jQgCLcBGAs/s1600/walleg-or%25C3%25A7amentos.png"
        alt="Tela de Orçamentos Walleg"/>
      <p>Está janela é utilizada para oferecer ao usuário controle de todos os Orçamentos emitidos.
      Além de poder arquivá-los, existe a possibilidade de emiti-los em um documento de apresentação utilizando a opção “Imprimir”.</p>
      <p>Preencha todos os dados na ficha de Cadastro de Orçamento, inclusive o campo Observações.
      O usuário pode imprimi-lo na hora e mantê-lo arquivado, apagando-o se não aceito ou excluí-lo quando transformá-lo em uma venda. </p>
      <p>Para cadastrar um Novo Orçamento de Vendas, digite o Código do Cliente ou clique na opção “Procurar”.
      Tecle ENTER após o Código do Produto e novamente tecle ENTER. Escolha o Tipo da Operação;
      No Orçamento pode-se escolher o Vendedor Responsável, Transportadora, Condição do Pagamento e Situação do Pagamento.</p>
      <p>Após preencher os campos necessários, clique no botão Gerar Orçamento.</p>
      </div>
    </div>
      )
    }
  }
