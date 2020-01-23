import React from 'react'

export class Login extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div id="login-inicio">
          <h1>Login</h1>
            <img
            src="https://1.bp.blogspot.com/--Q2MN8fDUQE/XOweAgaCkUI/AAAAAAAAAuU/93S00-QaOLETI7lJD5RUx9PY3hZj5Q56gCLcBGAs/s1600/walleg-login.png"
            alt="Tela de Login Walleg"/>
          <p>Na figura acima há três caixas, que correspondem respectivamente à:</p>
            <ol>
              <li>Usuário;</li>
              <li>Senha;</li>
              <li>Empresa.</li>
            </ol>
          <p>Sua função é <strong>logar</strong> o usuário no sistema Walleg; para que isso ocorra sem qualquer tipo de erro,
          é necessário o usuário estar cadastrado no sistema. Depois, preencha as caixas com as informações pedidas.</p>
          <p>OBS.: A caixa “Empresa” é preenchida <em>automaticamente</em> quando é inserido um banco de dados no sistema.</p>
            <ul>
              <li> Considerações Importantes: </li>
            </ul>
          <p>Para que o usuário tenha a disponibilidade de entrar no sistema, criar/remover ou alterar os usuários,
          o Walleg vem com uma senha padrão, sendo esta:</p>
          <p><em>Usuário: master</em></p>
          <p><em>Senha: 1</em></p>
          <p>É recomendado que se crie outro usuário com as configurações desejadas.
          Para criar um <strong>novo usuário</strong>, basta entrar no Walleg com o usuário padrão e selecionar a opção <u>Usuários</u>.
            <img
            src="https://1.bp.blogspot.com/-pVASzy3EdNU/XOwe0Y1llmI/AAAAAAAAAuc/3YK4bCQCuJ0qj-N8_68eLHNEhyMXeybiwCLcBGAs/s1600/walleg-usuarios__bot%25C3%25A3o.png"
            alt="Botão de Usuários Walleg"/>
            </p>
            <img
            src="https://1.bp.blogspot.com/-OnNKcBEClAM/XOwfbAOQHyI/AAAAAAAAAuk/UHhL-vVmAQkPE-TS0Adgo8rMeAC1dm6bwCLcBGAs/s1600/walleg-usuarios__menu.png"
            alt ="Barra de Ferramentas de Usuários Walleg"/>
            <ul>
              <li>Liberar usuário: Caso houver uma queda de sistema, utilize essa opção para liberar um novo acesso ao usuário.</li>
              <li>Clonar: Utiliza das permissões e acessos de um usuário já existente para fornecer acesso a outro usuário.</li>
              <li>Novo: Cria um novo usuário.</li>
              <li>Editar: Edita informações de um usuário já existente.</li>
              <li>Excluir: Exclui um usuário.</li>
              <li>Funções: Cria, edita ou exclui funções do usuário.</li>
              <li>Permissão: Recria permissões do usuário.</li>
              <li>Imprimir: Imprimir a lista de usuários.</li>
            </ul>
      </div>
      </div>
    )
  }
}
