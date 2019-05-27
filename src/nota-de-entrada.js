import React from 'react'

export class NotaDeEntrada extends React.Component {
      render(){
        return(
        <div className="main-content">
          <div id="nota-de-entrada">
          <h1>Nota Fiscal de Entrada</h1>
          <p>Para acessar a opção Nota Fiscal de Entrada, selecione o ícone “<u>NF-e Entrada</u>” na Barra de Ferramentas.
            <img
            src="https://1.bp.blogspot.com/-wIdv743pdIM/W4gXFA6vqMI/AAAAAAAAAXE/Trn0GFU_pckZpgODG6H-y9t3CRVDt4VbQCLcBGAs/s1600/nfe-e%2Bentrada%2Bbotao.jpg"
            alt= "Icone de NF-e Walleg"/>
          </p>
          <p>Desta forma, a seguinte janela abaixo será aberta.</p>
            <img
             src="https://1.bp.blogspot.com/-CEBOtePrWXo/XOw2HSa5HoI/AAAAAAAAA1I/6lcjL6fIh14Itqq9BogluFpnV3lctL_gQCLcBGAs/s1600/walleg-nfEntrada.png"
             alt="Tela de NF-e Walleg"/>
          <p>Na parte superior da janela, localiza-se a Barra de Ferramentas, respectivamente com as seguintes opções:</p>
            <ul>
              <li>Incluir Nota Fiscal;</li>
              <li>Incluir Itens;</li>
              <li>Processar Entrada da Nota Fiscal;</li>
              <li>Limpar;</li>
              <li>Estornar Atualização;</li>
              <li>Imprimir Nota;</li>
              <li>Localizar Notas Fiscais;</li>
              <li>Excluir Nota de Entrada;</li>
              <li>Importar Arquivos XML;</li>
              <li>Importar Planilhas Excel;</li>
              <li>Gravar Alterações;</li>
              <li>Desdobrar Item;</li>
              <li>Manual de Ajuda;</li>
              <li>Verificar Itens de Entrada;</li>
              <li>Criar Novos Produtos para este XML;</li>
              <li>Código Original do Fornecedor;</li>
              <li>Sair.</li>
            </ul>
          <p> Há duas maneiras de criar sua Nota Fiscal: <em>Manual</em> e <em>Automática</em>.</p>
          <p>1) Manual:</p>
            <ol>
              <li>Ao abrir a tela Nota Fiscal de Entrada, preencha os campos "Número da Nota" e "Código do Fornecedor", e aperte a tecla ENTER.
                Caso a Nota não exista, será criada. Se já existe, aparecerá na tela.</li>
              <li>Clique no botão Incluir NF.</li>
              <li>Em seguida, clique no botão Incluir Itens.</li>
              <li>Uma nova tela será aberta; Forneça o Código do Produto e aperte a tecla ENTER, ou caso não saiba, selecione o
                botão Localizar (ou utilize o atalho de teclado F2).</li>
              <li>Ainda nesta tela, preencha agora a Quantidade e Valor, e selecione Incluir (ou utilize o atalho de teclado F3).</li>
              <li>Ao finalizar, na tela de Nota Fiscal de Entrada clique no botão Processar para que a mesma entre no estoque.</li>
            </ol>
          <p>2) Automática:</p>
            <ol>
              <li>Ao abrir a tela Nota Fiscal de Entrada, clique no botão XML e localize nos arquivos de seu computador o XML desejado.</li>
                <img
                 src="https://1.bp.blogspot.com/-Z3BQNkYDuog/XOw2HdCZQZI/AAAAAAAAA1E/D465_2PVkA482PYRrvvcgvDSQKvEB0-1wCLcBGAs/s1600/walleg-nfeEntrada__2.png"
                   alt="Tela de Seleção do Arquivo XML"/>
              <li>Clique duas vezes no campo de Código que está vazio e preencha-o com o código do Produto interno, em seguida aperte ENTER.
              Aparecerá uma pequena tela de confirmação; <br/> Se selecionado "SIM" o sistema vinculará o Código e Produto do cliente com o código
              de seu banco de dados, sendo necessário fazer este passo apenas uma vez. Do contrário, não será salvo.</li>
                <img
                 src="https://1.bp.blogspot.com/-ETacgIiodRA/XOw2HTpCLII/AAAAAAAAA1M/qT0M9pgAX9YUj_hYnRloYBzwqTSnevV7ACLcBGAs/s1600/walleg-nfeEntrada__3.png"
                   alt="Tela de Código do Produto Nf-e Entrada"/>
              <li>Ao finalizar, clique no botão Processar para que a mesma entre no estoque.</li>
              </ol>
          </div>
        </div>
        )
      }
}
