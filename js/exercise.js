"use strict";
class Endereco {
    rua;
    numero;
    bairro;
    cidade;
    uf;
    constructor(rua, numero, bairro, cidade, uf) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }
}
const getAdress = async (cep) => {
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();
    let endereco = new Endereco(dados.logradouro, dados.gia, dados.bairro, dados.localidade, dados.uf);
    return endereco;
};
