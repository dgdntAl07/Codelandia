function gerarHorario() {
  const tipo = document.getElementById("tipoEscola").value;
  const tabelaDiv = document.getElementById("tabelaHorario");
  tabelaDiv.innerHTML = "";

  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  let periodos;

  if (tipo === "meio") {
    periodos = ["07:00 - 07:50", "08:00 - 08:50", "09:00 - 09:50", "10:00 - 10:50", "11:00 - 11:50"];
  } else {
    periodos = [
      "07:20 - 8:10", "08:10 - 9:00", "09:00 - 09:50",
      "10:00 - 10:50", "11:00 - 11:50", "13:00 - 13:50",
      "14:00 - 14:50", "15:00 - 15:50", "16:00 - 16:50"
    ];
  }

  let tabela = "<table><tr><th>Horário</th>";
  dias.forEach(dia => tabela += `<th>${dia}</th>`);
  tabela += "</tr>";

  periodos.forEach(horario => {
    tabela += `<tr><td>${horario}</td>`;
    dias.forEach(() => {
      tabela += "<td><input type='text' placeholder='Disciplina'/></td>";
    });
    tabela += "</tr>";
  });

  tabela += "</table>";
  tabelaDiv.innerHTML = tabela;
}
