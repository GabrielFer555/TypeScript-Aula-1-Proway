"use strict";
let endereco = {};
async function getEndereco(cep) {
    let dados;
    dados = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    let x = await dados.json();
    console.log(x);
    endereco.bairro = x.bairro;
    endereco.cidade = x.localidade;
    endereco.rua = x.logradouro;
    endereco.uf = x.uf;
    return endereco;
}
//module.exports ={endereco}
