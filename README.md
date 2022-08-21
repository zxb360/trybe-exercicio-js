# trybe-exercicio-js
fundamentos em javascript

<h2>Iniciando fundamentos em javascript na trybe-Bloco4-logica-de-programcao</h2>
<ul>
<li>Variáveis.</li>
<li>Constantes.</li>
<li>Tipos primitivos.</li>
<li>Tipagem dinâmica.</li>
<li>Operadores aritméticos.</li>
<li>Operadores de atribuição.</li>
<li>Operadores lógicos.</li>
<li>Estruturas condicionais como if/else e switch/case.</li>

<h2>Primeiro passo é instalar o Node.js</h2>
  <h3>instalando o Node no linux</h3>
  
  Para a instalação do 'nvm' no linux utilizaremos o comando 'curl'. 
  Caso ainda não tenha instalado esse comando em seu computador, será necessário instalá-lo.
  
  sudo apt update && sudo apt upgrade
  
  Depois instale o curl:
  
  sudo apt install curl
  
  Pronto, verifique a versão do curl:
  
  curl -v
  
  Instale o nvm:
  
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  
  Não podemos utilizar o nvm ainda, pois para isso é preciso reiniciar ou abrir outra janela em seu terminal. Mas podemos checar a versão instalada com o   seguinte comando:
  
  nvm -v
  
  Agora vamos escolher uma versão para instalar em nosso computador. O comando a seguir instala a versão mais recente do nvm.
  
  nvm install --lts 
  
  Esse procedimento já instala também o npm. Para checar a versão instalada, basta executar o seguinte comando:
  
  npm -v
  
  Caso queira transitar entre as versões instaladas basta digitar em seu terminal nvm use <versão desejada>, por exemplo:
  
  nvm use --lts
  
  Pós a execução do comando, feche e abra o terminal novamente.
  
