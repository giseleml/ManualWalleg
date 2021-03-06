import React from 'react'

export class Fornecedores extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="fornecedores">
      <h1>Fornecedores</h1>
      <p>Para acessar o Cadastro de Fornecedores, selecione o ícone "<u>Fornecedores</u>" na Barra de Ferramentas.
        <img 
        src="https://3.bp.blogspot.com/-ZLgvAhzVBN4/W4gXemPv-uI/AAAAAAAAAXo/X8-WOBdBtpMrHAIiV3RbsYQLBx91hFveACLcBGAs/s1600/fornecedores%2Bbotao.jpg"
        alt ="Botão Fornecedores Walleg"/>
      </p>
        <img
        src="https://1.bp.blogspot.com/-2XzMhnJq7xo/XOwnK8vZF_I/AAAAAAAAAwA/c5Ze5tyqyLwC_0kO6PrOLDaQf32g0UbewCLcBGAs/s1600/walleg-fornecedores.png"
        alt="Tela de Fornecedores Walleg"/>
      <p>Selecionando a opção “Fornecedores”, abrirá a janela mostrada acima. Para cadastrar um novo fornecedor,
      clique no ícone “Incluir Novo Fornecedor”. Preencha as informações de acordo com dados que possui, como: Razão Social, CNPJ,
      Nome Fantasia, Inscrição Estadual, Endereço, Número, Complemento, Bairro, Cidade, UF e CEP e Telefone.
      Ao preencher cada campo aperte ENTER. Ao terminar, tecle F10 ou clique no botão “Gravar Alterações” na Barra de Ferramentas.</p>
      <p>Nesta janela também pode ser encontradas as opções “Fornecedores” e “Diversos”. Com elas, o usuário pode acessar as
      últimas compras realizadas com este Fornecedor, a ficha financeira e os preços de seus respectivos produtos.
      Também poderá informar se a situação está “Ativa” ou “Inativa”.</p>
      <p>Esta tela ira lhe informar as ultimas compras realizadas com este fornecedor, a ficha financeira do mesmo
      e vai listar os preços de seus respectivos produtos,  você pode também informar  a situação  se  esta ativo ou inativo.</p>
      <p>Na parte inferior da janela de Cadastro estão os atalhos que podem ser usados para os botões de comando.</p>
      <p><strong>Relatório:</strong> Para visualizar ou imprimir um Relatório de Fornecedores,
      clique no ícone de impressora “Imprimir Documento”. A seguinte janela será aberta:</p>
      <img
          src="https://1.bp.blogspot.com/-ZHupqslFDEM/XOwnzt3V1-I/AAAAAAAAAwI/Thn2tdt2HW0Dz4kv_GXChdgnY2aPNngYwCLcBGAs/s1600/walleg-fornecedores__relat%25C3%25B3rio.png"
          alt="Tela de Relatorios Fornecedores Walleg"/>

      <p>Preencha os filtros conforme necessidade e clique no ícone de Impressora “Imprimir”. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
    )
  }
}
