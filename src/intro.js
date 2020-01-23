import React from 'react'

export class Intro extends React.Component {
    render() {
        return(
            <div className="main-content">
                <h1>Sistema Walleg</h1>
                <p>Aqui você pode ter acesso aos guias e tutoriais referentes à utilização do Sistema Walleg.</p>
                <p>O sistema possui funções como Contas à Pagar, Nota Fiscal de Serviço (NFS-e), Relatórios, etc.</p>
                <h2>Instalação</h2>
                <p>Para obter a instalação completa do seu sistema, entre em contato com nosso suporte.</p>
                <h2>Atualizações</h2>
                <p>As atualizações podem ser feitas diretamente pelo sistema, através da opção Ferramentas na Barra de Menus (ver Tela de Início).</p>
            </div>
        )
    }
}