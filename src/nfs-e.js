import React from 'react'

export class Nfse extends React.Component {
  render() {
    return(
    <div className="main-content">
        <div id="nfs-e">
        <h1>Nota Fiscal de Serviço (NFS-e)</h1>
        <p>Para acessar o Cadastro de Funcionários, selecione “Arquivo” na Barra de Menus, e clique na opção “<u>Nota Fiscal Serviço</u>”.
         A janela abaixo será aberta. Preencha os campos necessários para gerar a nota.</p>
           <img
            src="https://1.bp.blogspot.com/-PRdc-1XmVFY/W-Rsn3q6bvI/AAAAAAAAAhA/oDvJH8rE7kws2nEdCAggi234qj5q6nHhQCLcBGAs/s1600/Tela%2Bde%2BNF%2BServi%25C3%25A7o%2B.png"
            alt="Tela de NFS-e Walleg"/>
        <p>Na Barra de Ferramentas, pode-se encontrar as seguintes opções:</p>
          <ul>
            <li>Gerar: Gera a NFS-e;</li>
            <li>Transmitir: Transmite a NFS-e;</li>
            <li>Gerar PDF: Gera o PDF da Nota;</li>
            <li>Cancelar: Cancela a Nota;</li>
            <li>Excluir: Exclui a Nota;</li>
            <li>Enviar: Envia a Nota por e-mail.</li>
          </ul>
        <p>Ao selecionar a opção "Gerar", a seguinte janela será aberta:</p>
          <img
           src="https://2.bp.blogspot.com/-SECACYXyh7Y/W-Rs0nrKQII/AAAAAAAAAhE/L5OqDkpfmdEplvjeG3O3g-kslnvmrCTagCLcBGAs/s1600/Gerar%2BNFe.png"
           alt="Tela de Gerar NFS-e Walleg"/>
        <p>Digite o Cliente e o número do pedido. Utilize os ícones de lupa para procurar os dados em caso de dúvidas.
        Clique no botão “Gravar NFs-e” para gravá-la ou “Limpar Campos” para apagar os dados preenchidos.</p>
      </div>
    </div>
    )
  }
}
