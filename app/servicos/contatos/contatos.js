(function() {
  "use strict";

  angular.module("api.contatos", []).factory("Contatos", function() {
    var Contatos = {};
    var listaContatos = [
      {
        id: "1",
        nome: "Paulo",
        sexo: "Masculino",
        cidade: "Valinhos",
        nascimento: "2010-05-01"
      },
      {
        id: "2",
        nome: "Mateus",
        sexo: "Masculino",
        cidade: "Valinhos",
        nascimento: "2008-03-25"
      },
      {
        id: "3",
        nome: "Marcia",
        sexo: "Feminino",
        cidade: "Sao Paulo",
        nascimento: "1996-01-15"
      }
    ];

    Contatos.todos = function() {
      return listaContatos;
    };

    return Contatos;
  });
})();
