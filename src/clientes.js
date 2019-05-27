import React from 'react'

export class Clientes extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="clientes">
      <h1>Clientes</h1>
      <p>Para acessar o Cadastro de Clientes, selecione o ícone "<u>Clientes</u>" na Barra de Ferramentas.
        <img
        src="https://3.bp.blogspot.com/-xFCCiSjXLBU/W4gYLItx2-I/AAAAAAAAAYs/dwyCfE-FKtcFJLlD-SMkoU1H923gkhYXACLcBGAs/s1600/Clientes%2Bbotao.jpg"
        alt="Botão de Clientes Walleg"/>
      </p>
        <img
        src="https://1.bp.blogspot.com/-UUUvxagKw6Y/W-RkdoaxSvI/AAAAAAAAAeo/nui4scHRb_4X86Hq4owUjT9wzU4LbB2oQCLcBGAs/s1600/Clientes.png"
        alt="Tela de Clientes Walleg"/>
      <p>Selecionando a opção “Clientes”, abrirá a janela mostrada acima. Ela é dividida em três partes para facilitar o entendimento dos itens.
      As partes divididas são:</p>
      <p><strong>1) Ações Disponíveis</strong></p>
          <img
          src="https://2.bp.blogspot.com/-P2fiuRV87zQ/W4gYLK39prI/AAAAAAAAAYw/5SsT1_2vL9cMipvcFKNpdhR3Yg7eHhHMACLcBGAs/s1600/barra%2Bferramenta%2Bclientes.jpg"
          alt="Menu de Ações Walleg"/>
          <p>Nesta Barra de Ferramentas pode-se encontrar as seguintes ações respectivamente:</p>
          <ul>
            <li>Incluir novo cliente;</li>
            <li>Limpar tela;</li>
            <li>Gravar alterações;</li>
            <li>Excluir clientes;</li>
            <li>Procurar clientes;</li>
            <li>Enviar e-mail;</li>
            <li>Ajuda;</li>
            <li>Abrir contatos;</li>
            <li>Relatório de clientes;</li>
            <li>Sair.</li>
          </ul>
      <p><strong>2) Informação e Preenchimento</strong></p>
          <img
          src="https://1.bp.blogspot.com/-RS-fzUPOQpk/XOwl_3mgnnI/AAAAAAAAAvg/q-3KikXCJHoTf2sehZ0Tyftls2N9aRECACLcBGAs/s1600/walleg-clientes.png"
          alt="Tela de Informação e Preenchimento Walleg"/>
          <p>Nestes espaços o usuário terá disponível as opções de Informação e Preenchimento.
            Ao clicar em um cliente já cadastrado, todos os campos preenchidos no cadastro conterão suas respectivas informações.
            Já o preenchimento só é usado na hora de um novo cadastro, ou na alteração de informações de um cliente já cadastrado.</p>
          <p><strong> 3) Teclas de Atalho </strong></p>
            <img
            src="https://2.bp.blogspot.com/-rR5hUDQ9St0/W-Rk6DIo0cI/AAAAAAAAAew/u1kve90XhbQGTY_Bb74ropWl413mVZKDgCLcBGAs/s1600/teclas%2Bde%2Batalho.png"
            alt="Teclas de Atalho Walleg"/>
          <p> Na parte inferior da janela de Cadastro estão os atalhos que podem ser usados para os botões de comando.</p>
          <p><strong>Relatório:</strong>Para visualizar ou imprimir um Relatório de Clientes, clique no ícone de impressora “Relatório de Clientes”.
           A seguinte janela será aberta:</p>
             <img
             src="https://1.bp.blogspot.com/-0U74q9NaPsM/XOwmld7VxOI/AAAAAAAAAv0/NKuRMwYHn6ARMXHFDySi4hiEjx2LRw-FQCLcBGAs/s1600/walleg-relatorio-de-clientes.png"
            alt="Relatório de Clientes Walleg"/>
              <p>Preencha os filtros conforme necessidade e clique no botão de Salvar. Em seguida, o relatório será gerado.</p>
      </div>
    </div>
    )
  }
}
