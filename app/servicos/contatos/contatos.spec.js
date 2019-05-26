describe("Conjunto de Teste", function() {
  var ContatosTeste;
  var listaDeContatosTeste = [
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
  // chamado antes da execucao de testes - chama o o modulo api contatis
  beforeEach(angular.mock.module("api.contatos"));

  // injetar o servico de Contatos para usar nos casos de teste
  beforeEach(inject(function(Contatos) {
    ContatosTeste = Contatos;

    it("Servico Existe?", function() {
      expect(ContatosTeste).toBeDefined();
    });

    describe(".todos()", function() {
      it("Metodo existe?", function() {
        expect(ContatosTeste.todos).toBeDefined();
      });

      it("Deve retornar uma lista de contatos", function() {
        expect(ContatosTeste.todos()).toEqual(listaDeContatosTeste);
      });
      /*  >> pesquisar not to Be Defined == retorn false - 53' 
      it("Deve retornar uma lista de contatos", function() {
        expect(ContatosTeste.todos()).not.toBeDefined(listaDeContatosTeste);
      });
*/
    });
  }));
});
