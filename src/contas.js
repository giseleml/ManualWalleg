import React from 'react'

export class Contas extends React.Component {
  render(){
    return(
    <div className="main-content">
      <div id="contas">
      <h1>Contas</h1>
      <h2>1. Contas à Receber: Recebimentos</h2>
          <p><strong>Funções:</strong></p>
          <ul>
            <li>Emitir boletos, enviar remessa, conferir retorno-remessa;</li>
            <li> Gerar NFS-e (Nota Fiscal Eletrônica de Serviços) na Pasta Walleg NFS-e.exe;</li>
            <li> Emitir para os mesmos clientes do mês anterior;</li>
            <li> Enviar boletos por email;</li>
          </ul>
          <p>Para acessar o Contas à Receber, selecione o ícone "<u>Contas</u>" na Barra de Ferramentas.</p>
          <img src="https://1.bp.blogspot.com/-Da9ns5M8zU8/XOxNAvX0FiI/AAAAAAAAA2g/FuFT2ECIXaM51XRXUWr-HN4P9l_hyw_JQCLcBGAs/s1600/walleg-contas__menu.png" 
          alt="Ícone de Contas à Pagar Walleg"/>

      <h2>2. Gerando Boletos Mensais</h2>
        <p>Acesse Contas > Receber > Recebimentos.</p>
        <p>Clique no ícone "Agenda" e em seguida escolha a opção "selecionar todos" OU aperte Ctrl + A no seu teclado.</p>
        <p>Escolha o Mês e Ano das parcelas que deseja criar.</p>
        <img src="https://1.bp.blogspot.com/-VvcJxTqwNWE/XOxM_4o38AI/AAAAAAAAA2I/Xj5gTRzEmds8PmFllO5pYU4CZYDHeUMeQCLcBGAs/s1600/walleg-contas__agendamentos.png"
        alt="Opções de escolher Mês e Ano das Parcelas Walleg" />

        <p>Clique em Processar, como na imagem abaixo:</p>
        <img src="https://1.bp.blogspot.com/--KCZ-m72_qo/XOxM_7TjiFI/AAAAAAAAA2U/QB3O0p2zwzIB218oCrD0XsOPHsvs88fWwCLcBGAs/s1600/walleg-contas__btn-processar.png"
        alt="Botão de Processar Walleg" />

      <h2>3. Gerando o Número do Banco</h2>
        <p>Acesse Contas > Receber > Recebimentos</p>
        <p>Clique em Documentos, e selecione "Filtrar por Seleção", escolhendo em seguida a opção "À vencer".</p>
        <img src="https://1.bp.blogspot.com/-bGGcCxqH-zo/XOxNAggZMGI/AAAAAAAAA2Y/nnS37DgGVIg2dce07Vk36OIRX2bh1n8ywCLcBGAs/s1600/walleg-contas__filtrar.png"
        alt="Tela de Recebimentos Walleg" />
        <p>Selecione todos os boletos que deseja gerar e clique no botão "Gerar Boleto".</p>
        <p>O sistema processará e gerará o Número do Banco para os títulos selecionados. Após concluído 
            o processo, clique no botão "Enviar E-mail".</p>
        <p>O sistema processará e enviará os boletos selecionados por email para todos os clientes.</p>
        <img src="https://1.bp.blogspot.com/-n4VttRV5Vik/XOxM_-dae9I/AAAAAAAAA2M/ARETLV7hyC41Wa_0wcJCQ6r-yZsqeoNDwCLcBGAs/s1600/walleg-contas__boletos.png"
        alt="Botões de Gerar Boleto e Enviar E-mail Walleg" />

      <h2>4. Gerando Remessa para o Banco</h2>
            <p>Acesse Contas > Receber > Gerar Remessa</p>
            <p>Informe o período Inicial e Final da Data de Emissão e clique no ícone de "Pesquisar" (lupa) ao lado direito.</p>
            <p><strong>IMPORTANTE:</strong> Deixe marcada a opção "Somente com Nosso Número".</p>
            <p>Anote o Número da Remessa, pois será necessário para os próximos passos.</p>
            <img src="https://1.bp.blogspot.com/-p2yipi1a-80/XOxNBT6DEsI/AAAAAAAAA2k/B9akDbjH5JYomI_6yUTRE0kGgnVTtn-6wCLcBGAs/s1600/walleg-contas__remessa.png"
            alt="Painel de Escolha de Data de Emissão e Vencimento da Remessa Walleg" />

       <h2>5. Enviando Remessa para o Banco</h2>
            <p>Acesse o Sistema do seu Banco.</p>
            <p>Escolha a opção "Transmissão de Arquivos".</p>
            <p>Clique em "Adicionar Arquivos".</p>
            <p>Localize o seu arquivo de Remessa gerado na pasta WALLEG\REMESSA. No Dropbox, o formato do arquivo
                é "CB100701.REM", onde CB + DDMM + número remessa do dia.</p>
            <p>Observe a data gerada para confirmar se este é o arquivo gerado. Se tudo estiver certo, confirme e clique em "Enviar Remessa".</p>

        <h2>6. Recebendo Retorno da Remessa pelo Banco</h2>
            <p>Acesse o Sistema do seu Banco.</p>
            <p>Escolha a opção "Transmissão de Arquivos"</p>
            <p>Clique em "Adicionar Arquivos"</p>
            <p>Selecione os arquivos e salve na pasta WALLEG\RETORNO no Dropbox.</p>

        <h2>7. Baixando títulos através do Retorno do Banco</h2>
            <p>Clique em Contas > Receber > Retorno Remessa</p>
            <p>Localize o arquivo baixado do Banco e clique em "Processar".</p>
            <p>O sistema processará e dará baixa nos títulos pagos. Para conferir, vá em Contas > Receber > Recebimentos
                e filtre por "Em Aberto" ou "Pagos".</p>
            <img src="https://1.bp.blogspot.com/-MDkX6b-Ibws/XOxNBklv2eI/AAAAAAAAA2o/RpK3EbtB9-g8MijjWIlXjRGj8sbKnY_2QCLcBGAs/s1600/walleg-contas__retorno.png"
            alt="Tela de Retorno Walleg" />
     </div>
    </div>
    )
  }
}
