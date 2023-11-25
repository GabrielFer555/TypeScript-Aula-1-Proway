interface IEndereco{
    rua?:string,
    numero?:number | string,
    bairro?: string,
    cidade?:string,
    uf?:string
}

class Endereco implements IEndereco{
    rua?:string
    numero?:number | string
    bairro?: string
    cidade?:string
    uf?:string

    public constructor(rua?:string, numero?:number | string, bairro?:string, cidade?:string, uf?:string){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }
}

const getAdress = async(cep:string):Promise<Endereco> =>{

    const response:Response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();
    let endereco = new Endereco(dados.logradouro, dados.gia, dados.bairro, dados.localidade, dados.uf)
    return endereco;
}