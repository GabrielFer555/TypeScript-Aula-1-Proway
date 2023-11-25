interface IEndereco{
    id?:number;
    rua?:string,
    numero?:number | string,
    bairro?: string,
    cidade?:string,
    uf?:string
}
let endereco:IEndereco = {};

async function getEndereco(cep:string){
    let dados:Response;
    dados = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    let x = await dados.json();
    console.log(x)
   endereco.bairro = x.bairro
    endereco.cidade = x.localidade
    endereco.rua = x.logradouro
    endereco.uf = x.uf
    return endereco;
}


//module.exports ={endereco}


