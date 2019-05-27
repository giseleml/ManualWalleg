import React from 'react'

export class Nfs extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="nfs">
      <h1>Nota Fiscal de Saída</h1>
      <p>Para acessar a opção Nota Fiscal de Saída, selecione o ícone “<u>NF-e Venda</u>” na Barra de Ferramentas.
        <img
        src="https://1.bp.blogspot.com/-AW4_GEqsmh8/W4gW87Vv_MI/AAAAAAAAAW0/YyXBPWoxzEI_i1dMlKogEf3F12ILxz7_gCLcBGAs/s1600/nf-e%2Bsaida%2Bvenda%2Bbotao.jpg"
        alt="Icone de Nota Fiscal de Saida Walleg"/>
      </p>
      <p>Desta forma, a seguinte janela abaixo será aberta.</p>
        <img
         src="https://1.bp.blogspot.com/-AbPYMf0fM9U/XOw0KYZ8YfI/AAAAAAAAA0s/m1ZYQdVcExAssZgswDS4mlzg47sgtgXQACLcBGAs/s1600/walleg-nfeVenda.png"
         alt="Tela de Nota Fiscal de Saida Walleg"/>
      <p>Na parte superior da janela, localiza-se a Barra de Ferramentas, respectivamente com as seguintes opções:</p>
        <ul>
          <li>Pedidos: Localiza os pedidos de acordo com Filtro e Data selecionados pelo usuário;</li>
          <li>Limpar: Limpa a tela de Nota Fiscal de Saída;</li>
          <li>Gerenciar Notas: Oferece as opções de Consultar, Status Sefaz, Gerar Boleto, Etiqueta
          Endereço do Cliente, GNRE, Validar NF-e, Corrigir, Transmitir e Imprimir Danfe. <br/>Também é possível filtrar as Notas de acordo com
          Período, Modelo, Autorizadas, Canceladas, Em Aberto, Inutilizadas e Rejeitadas;<br/></li>
          <li>Gravar: Salva as alterações da tela;</li>
          <li>Excluir: Exclui a Nota Fiscal; </li>
          <li>Configurações: Configurações da NF-e; </li>
          <li>Sair.</li>
        </ul>
      <p>Para Gerar a NF-e de Saída, siga os seguintes passos:</p>
      <ol>
        <li>Selecione a Natureza da Operação;</li>
        <li>Digite o Número do Pedido. Em caso de dúvida, clique em "Pedidos" na Barra de Ferramentas para localizá-lo;</li>
        <li>Clique em "Gravar" para gravar a Nota.</li>
      </ol>
      <p>Selecionando a Nota, o usuário pode abrir o arquivo TXT, que também está localizado na pasta Walleg em seu computador.</p>
      <p>O usuário pode Assinar, Validar e Transmitir a Nota ou fazer tudo isso automaticamente pelo botão “Enviar” no topo da janela.
      Ao finalizar o envio, será possível visualizar a nota em XML, PDF, enviar por e-mail ou imprimir DANFE.</p>
      <p>Na parte superior da janela pode-se encontrar as seguintes opções:</p>
        <ul>
          <li>Consultar: Corrigir notas Abortadas/Canceladas;</li>
          <li>Status Sefaz: Consultar se o computador do Sefaz está funcionando corretamente;</li>
          <li>Boleto: Gerar boleto de pagamento;</li>
          <li>Etiqueta: Emitir uma etiqueta para a Transportadora com dados da Nota e do Cliente;</li>
          <li>GNRE: Gerar guias de imposto.</li>
          <li>Conferir: Selecionar uma Nota de acordo com o período determinado pelo usuário, ou todas as Notas
          possibilitando verificar o XML e se a documentação está em ordem;</li>
        </ul>
      <p>Na parte inferior da janela, pode-se encontrar as duas seguintes opções:</p>
        <ul>
          <li>Correção: Corresponde a Carta de Correção. Em caso de erro no preenchimento da Nota,
             digite a correção no campo “Justificativas” para corrigi-la. <br/> Nesta opção é possível corrigir múltiplas vezes a mesma nota.<br/></li>
          <li>Cancelar: Digite no campo “Justificativas” e clique no botão “Cancelar” para cancelar uma nota.
               Atenção, está opção só pode ser usada uma única vez.</li>
        </ul>
     </div>
   </div>
    )
  }
}
