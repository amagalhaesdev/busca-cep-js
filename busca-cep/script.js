document.getElementById("cep").addEventListener("blur", (evento) => {
  const elemento = evento.target;
  const cepInformado = elemento.value;

  if (cepInformado.length !== 8) {
    alert("Cep informado é inválido");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;

        const dadosPreenchidos = {
          cep: cepInformado,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
        };

        // Aqui você pode salvar no localStorage, se quiser
         // localStorage.setItem("endereco", JSON.stringify(dadosPreenchidos));
      } else {
        alert("Cep não encontrado.");
      }
    })
    .catch((error) => console.error("Erro ao buscar o CEP: ", error));
});

// Recupera dados do localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const dadosSalvos = localStorage.getItem("endereco");
  if (dadosSalvos) {
    const endereco = JSON.parse(dadosSalvos);
    document.getElementById("cep").value = endereco.cep;
    document.getElementById("logradouro").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.cidade;
    document.getElementById("estado").value = endereco.estado;
  }
});
