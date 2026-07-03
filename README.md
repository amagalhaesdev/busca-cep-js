# busca-cep-js

Uma aplicacao web leve e responsiva que automatiza o preenchimento de formularios de endereco utilizando a API REST ViaCEP. Quando o usuario insere um CEP valido e sai do campo (evento blur), a aplicacao busca os dados e preenche automaticamente os campos de logradouro, bairro, cidade e estado.

Este projeto demonstra boas praticas em JavaScript assincrono, consumo de APIs, manipulacao do DOM e persistencia de estado local.

---

## Funcionalidades

- Consumo de API Assincrono: Integracao direta com o endpoint da ViaCEP utilizando Fetch API nativa e Promises.
- Preenchimento Automatico: Evento de escuta disparado assim que o campo de CEP perde o foco, agilizando a experiencia do usuario.
- Validacao de Entrada: Validacao basica para garantir que o CEP possua exatamente 8 caracteres antes de realizar a requisicao.
- Persistencia de Dados: Utilizacao do localStorage para manter os dados salvos no formulario mesmo apos recarregar a pagina.
- Interface Limpa: Layout responsivo construido com tecnicas modernas de CSS (Flexbox, transicoes e seletores personalizados).

---

## Tecnologias Utilizadas

- HTML5: Estrutura de marcacao semantica.
- CSS3: Estilizacao e layout utilizando Flexbox e customizacao de inputs.
- JavaScript (ES6+): Programacao assincrona (Fetch API), funcoes de seta (Arrow Functions) e manipulacao do DOM.

---

## Como Executar o Projeto

Por se tratar de uma aplicacao exclusivamente client-side, nao e necessario configurar nenhum servidor ou banco de dados local.

1. Clone o repositorio:
   ```bash
   git clone https://github.com/amagalhaesdev/busca-cep-js/tree/main/busca-cep
