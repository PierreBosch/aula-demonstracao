class UserController {
  async show(req, res) {
    const user = {
      nome: "Pierre",
      idade: 21,
      sexo: "masculino",
      endereco: {
        rua: "Rua  Adolfo Machado",
        complemento: "casa",
        bairro: "Santo Antonio",
        cidade: "Tubarão",
        uf: "SC"
      },
      cpf: "11720195927"
    };
    res.send(user);
  }
}

module.exports = new UserController();
