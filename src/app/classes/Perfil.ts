export class Perfil {
    public nome: string;
    public sobrenome: string;
    public usuario: string;
    public senha: string;    
    public cidade: string;
    public estado: string;
    public pais :string;
    public email :string;
    public celular :string;


    constructor(nome: string, pSpbrenome: string,pUsuario: string,
        pSenha: string,pCidade: string,pEstado: string,pPais: string,pEmail: string,pCelular: string) {
        this.nome = nome;
        this.sobrenome = pSpbrenome;
        this.usuario = pUsuario;
        this.senha = pSenha;
        this.cidade = pCidade;
        this.estado = pEstado;
        this.pais = pPais;
        this.email = pEmail;
        this.celular = pCelular;
    }
}