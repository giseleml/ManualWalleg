import React from 'react'

export class PedidoDeVenda extends React.Component {
    render(){
      return(
      <div className="main-content">
        <div id="pedido-de-venda">
          <h1>Pedido de Venda</h1>
          <p>
          Para acessar a opção Pedidos de Venda, selecione o ícone “Pedido” na Barra de Ferramentas.
            <img className="walleg-icon"
             src="https://1.bp.blogspot.com/-vX1iJOgRk44/W4gWrlWj2sI/AAAAAAAAAWc/jKKMsP4vPM8R94daa2HRoPFZiNnYXeVmQCLcBGAs/s1600/pedidos%2Bvenda.jpg"
             alt="Botão de Pedido Walleg"/>
          </p>
          <p>Desta forma, a seguinte janela abaixo será aberta.</p>
            <img
             src="https://2.bp.blogspot.com/-Ub0FYEUQkw8/W4gWrcVt65I/AAAAAAAAAWU/Axi7lC6LveICEZP6k3mepEASFyBNPlSmACLcBGAs/s1600/pedidos%2Btela.jpg"
             alt="Tela de Pedido Walleg"/>
          <p>Para realizar um novo pedido, preencha os campos informando o Código do Cliente, o Código, nome OU referência do Produto,
          a Operação e o Vendedor. Após terminar, clique em GRAVAR.</p>
          <p>Nesta janela ainda é possível Imprimir Pedido em formato de Cupom e utilizar o Coletor de Dados.</p>
          <p>No topo da janela há uma Barra de Menus, como mostra na figura abaixo, com as seguintes opções: </p>
            <img
             src="https://4.bp.blogspot.com/-Ga3OydfyuHQ/W4gWrL_59SI/AAAAAAAAAWQ/AoDTBBmQxfcyoTrvUkNz5x0qduxyPufFgCLcBGAs/s1600/pedidos%2Bmenu.jpg"
             alt="Barra de Menu Pedido Walleg"/>
            <ul>
              <li>Procurar pedidos;</li>
              <li>Volume;</li>
              <li>Incluir volumes;</li>
              <li>Excluir volumes;</li>
              <li>Calcular frete;</li>
              <li>Faturar todos;</li>
              <li>Configuração;</li>
              <li>Relatórios;</li>
              <li>Sair. </li>
            </ul>
          <p><strong>Relatório</strong>: Para visualizar ou imprimir um Relatório de Pedidos, clique no ícone “Relatórios” na Barra de Ferramentas. A seguinte janela será aberta: </p>
            <img
             src="https://1.bp.blogspot.com/-6IfW-AwZUB0/W4gWrcZUDII/AAAAAAAAAWY/7ZTX6O2h0p802ahy1KMt0sU8crf5OKlUwCLcBGAs/s1600/pedidos%2Brelatorio.jpg"
             alt="Relatório de Pedidos Walleg"/>
          <p>Preencha os filtros conforme necessidade, escolha a impressora e clique no botão Salvar para gerar o relatório.</p>
        </div>
      </div>
      )
    }
}
